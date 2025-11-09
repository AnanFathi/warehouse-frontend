"use server";

import { apiClient } from "@/lib/apiClient";

export const deleteCategory = async (id: string): Promise<void> => {
  return apiClient<void>(`categories/${id}`, {
    method: "DELETE",
  });
};
