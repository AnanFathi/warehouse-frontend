import { PaginatedPayload } from "./shared.model";

export type Category = {
  _id: string;
  name: string;
  imageURL: string;
  createdAt: string;
  updatedAt: string;
};

export type CategoriesPayload = PaginatedPayload & {
  name?: string;
};
