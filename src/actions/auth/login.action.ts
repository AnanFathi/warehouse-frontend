"use server";

import { apiClient } from "@/lib/apiClient";
import { STATUS_CODES } from "@/lib/staticKeys";
import { saveTokens } from "@/lib/tokenUtils";
import { LoginPayload, Me, ServerResponse } from "@/models/shared.models";

export const login = async ({
  email,
  password,
}: LoginPayload): Promise<ServerResponse<Me>> => {
  const res = await apiClient<ServerResponse<Me>>("users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    skipAuth: true,
  });

  if (res?.statusCode === STATUS_CODES.success && res?.data) {
    const { refreshToken, accessToken } = res?.data;
    if (refreshToken && accessToken) {
      await Promise.all([saveTokens(accessToken, refreshToken)]);
    }
  }

  return res;
};
