import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { COOKIES_KEYS } from "./staticKeys";

interface JwtPayload {
  sub: string;
  exp: number;
}

export const getAccessToken = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIES_KEYS.accessToken)?.value;
  return token || null;
};

export const getRefreshToken = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIES_KEYS.refreshToken)?.value;
  return token || null;
};

export const saveTokens = async (
  accessToken: string,
  refreshToken: string
): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.set(COOKIES_KEYS.accessToken, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  cookieStore.set(COOKIES_KEYS.refreshToken, refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
};

export const clearTokens = async (): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIES_KEYS.accessToken);
  cookieStore.delete(COOKIES_KEYS.refreshToken);
};

export const getUserIdFromToken = (token: string): string | null => {
  try {
    const { sub } = jwtDecode<JwtPayload>(token);
    return sub;
  } catch (error) {
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const { exp } = jwtDecode<JwtPayload>(token);
    // Add a small buffer (e.g., 10 seconds) to account for network delays
    return exp * 1000 < Date.now() + 10000;
  } catch (error) {
    return true;
  }
};

export const refreshAccessToken = async (): Promise<boolean> => {
  try {
    console.log("🟡 ⬅️ ~ Trying to refresh tokens: users/refresh-token");
    const refreshToken = await getRefreshToken();

    if (!refreshToken) {
      return false;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/refresh-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (!response.ok) {
      console.log("🔴 ➡️ ~ Error refreshing tokens: users/refresh-token");
      await clearTokens();
      return false;
    }

    const tokens = await response.json();
    const { accessToken, refreshToken: newRefreshToken } = tokens?.data;

    await saveTokens(accessToken, newRefreshToken || refreshToken);
    return true;
  } catch (error) {
    console.log("🔴 ➡️ ~ Faled to refresh tokens: users/refresh-token");
    await clearTokens();
    return false;
  }
};
