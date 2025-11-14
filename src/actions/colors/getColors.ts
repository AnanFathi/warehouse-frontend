"use server";

import { apiClient } from "@/lib/apiClient";
import { getFilter } from "@/lib/utils";
import { ColorsPayload, Color } from "@/models/color.model";

export const getColors = async ({
  search,
}: ColorsPayload): Promise<Color[]> => {
  return apiClient<Color[]>(`colors?${getFilter("search", search)}`, {
    method: "GET",
  });
};
