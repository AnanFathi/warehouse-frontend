"use server";

import { apiClient } from "@/lib/apiClient";
import { Color, EditColorPayload } from "@/models/color.model";
import { Paginated } from "@/models/shared.model";

export const editColor = async (
  payload: EditColorPayload
): Promise<Paginated<Color>> => {
  const { _id, ...newPayload } = payload;

  return apiClient<Paginated<Color>>(`colors/${payload._id}`, {
    method: "PATCH",
    body: JSON.stringify(newPayload),
  });
};
