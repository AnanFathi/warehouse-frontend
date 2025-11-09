"use server";

import { apiClient } from "@/lib/apiClient";
import { Category, CreateCategoryPayload } from "@/models/category.model";
import { Paginated } from "@/models/shared.model";

export const createCategory = async (
  payload: CreateCategoryPayload
): Promise<Paginated<Category>> => {
  return apiClient<Paginated<Category>>("categories", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
