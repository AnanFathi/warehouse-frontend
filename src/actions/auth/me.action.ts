"use server";

import { apiClient } from "@/lib/apiClient";
import { Me, ServerResponse } from "@/models/shared.models";

export const me = async ({
  refreshTokens = true,
  redirectToLogin = true,
}: {
  refreshTokens?: boolean;
  redirectToLogin?: boolean;
}): Promise<ServerResponse<Me>> => {
  return apiClient<ServerResponse<Me>>("users/me", {
    method: "GET",
    refreshTokens,
    redirectToLogin,
  });
};
