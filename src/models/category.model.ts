import { PaginatedPayload } from "./shared.model";

export type Category = {
  _id: string;
  name: string;
  imageURL: string;
  itemCount: number;
  createdAt: string;
  updatedAt: string;
};

export type CategoriesPayload = PaginatedPayload & {
  name?: string;
};

export type CreateCategoryPayload = {
  name?: string;
};

export type EditCategoryPayload = {
  _id: string;
  name?: string;
};