"use server";

import { apiClient } from "@/lib/apiClient";
import { Color, CreateColorPayload } from "@/models/color.model";
import { Paginated } from "@/models/shared.model";

export const createColor = async (
  payload: CreateColorPayload
): Promise<Paginated<Color>> => {
  return apiClient<Paginated<Color>>("colors", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
