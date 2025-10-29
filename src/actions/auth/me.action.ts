"use server";

import { apiClient } from "@/lib/apiClient";
import { ServerResponse } from "@/model/shared.models";
import { User } from "@/model/user.models";

export const me = async (): Promise<ServerResponse<User>> => {
  return apiClient<ServerResponse<User>>("users/me", {
    method: "GET",
  });
};
