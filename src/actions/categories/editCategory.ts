"use server";

import { apiClient } from "@/lib/apiClient";
import { Category, EditCategoryPayload } from "@/models/category.model";
import { Paginated } from "@/models/shared.model";

export const editCategory = async (
  payload: EditCategoryPayload
): Promise<Paginated<Category>> => {
  const { _id, ...newPayload } = payload;

  return apiClient<Paginated<Category>>(`categories/${payload._id}`, {
    method: "PATCH",
    body: JSON.stringify(newPayload),
  });
};
