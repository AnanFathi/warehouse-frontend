"use server";

import { apiClient } from "@/lib/apiClient";
import { User } from "@/models/user.model";

export const getMe = async (): Promise<User> => {
  return apiClient<User>("users/me", {
    method: "GET",
  });
};
