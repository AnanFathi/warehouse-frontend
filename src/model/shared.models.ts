export type NameId = { name?: string; id?: string };

export type ServerResponse<T> = {
  data: T;
  message: string | string[];
  error?: ErrorResponse;
};

export type ErrorResponse = {
  message: string | string[];
  error: string;
  statusCode: number;
};

export interface IPaginated<T> {
  data: T[];
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export type PaginatedResponse<T> = ServerResponse<IPaginated<T>>;

export type SortType = "ASC" | "DESC";

export type Dir = "ltr" | "rtl";

export type DialogSettings<T> = {
  open: boolean;
  setOpen: (val: boolean) => void;
  item: T;
};
