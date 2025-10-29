import { useTopLoader } from "nextjs-toploader";
import { useEffect, useState } from "react";

type RequestOptions<R> = {
  onSuccess?: (data: R) => void;
  onError?: (error: Error) => void;
  onStart?: () => void;
  onFinish?: () => void;
  fetchOnMount?: boolean;
  showTopLoader?: boolean;
};

const useRequest = <P, R>(
  queryFn: (payload: P) => Promise<R>,
  {
    onSuccess,
    onError,
    onStart,
    onFinish,
    fetchOnMount = false,
    showTopLoader = true,
  }: RequestOptions<R> = {}
) => {
  const [data, setData] = useState<R | null>(null);
  const [isLoading, setIsLoading] = useState(fetchOnMount);
  const [error, setError] = useState<Error | null>(null);
  const { start: startTopLoader, done: doneTopLoader } = useTopLoader();

  const request = async (payload: P): Promise<R> => {
    setIsLoading(true);
    onStart?.();
    setError(null);

    try {
      startTopLoader();
      const result = await queryFn(payload);
      setData(result);
      onSuccess?.(result);
      return result;
    } catch (err: any) {
      const typedError = err instanceof Error ? err : new Error(String(err));
      setError(typedError);
      onError?.(typedError);
    } finally {
      doneTopLoader();
      setIsLoading(false);
      onFinish?.();
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setIsLoading(false);
  };

  useEffect(() => {
    if (fetchOnMount) {
      request(undefined as unknown as P).catch(() => {});
    }
  }, [fetchOnMount]);

  return { request, data, isLoading, error, reset };
};

export default useRequest;
