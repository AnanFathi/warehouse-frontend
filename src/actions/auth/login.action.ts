"use server";

import { apiClient } from "@/lib/apiClient";
import { saveTokens } from "@/lib/tokenUtils";
import { Auth } from "@/models/user.model";

export type LoginPayload = {
  email: string;
  password: string;
};

export const login = async ({
  email,
  password,
}: LoginPayload): Promise<Auth> => {
  const res = await apiClient<Auth>("auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    skipAuth: true,
  });

  if (res?.accessToken) {
    await Promise.all([saveTokens(res.accessToken)]);
  }

  return res;
};
