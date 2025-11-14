"use server";

import { apiClient } from "@/lib/apiClient";

export const deleteColor = async (id: string): Promise<void> => {
  return apiClient<void>(`colors/${id}`, {
    method: "DELETE",
  });
};
