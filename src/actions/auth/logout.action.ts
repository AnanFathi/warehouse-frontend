"use server";

import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/staticKeys";
import { clearTokens } from "@/lib/tokenUtils";

export async function logout(): Promise<void> {
  await clearTokens();
  redirect(ROUTES.login?.url);
}
