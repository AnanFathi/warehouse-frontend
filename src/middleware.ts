import { NextRequest, NextResponse } from "next/server";
import { COOKIES_KEYS, ROUTES } from "./lib/staticKeys";
import { isTokenExpired } from "./lib/tokenUtils";

export async function middleware(request: NextRequest) {
  if (request.method === "POST") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  let accessToken = request.cookies.get(COOKIES_KEYS.accessToken)?.value;
  let isAccessTokenValid = !isTokenExpired(accessToken);

  // If access token is not valid but refresh token exists, attempt to refresh
  if (!isAccessTokenValid) {
    const refreshToken = request.cookies.get(COOKIES_KEYS.refreshToken)?.value;

    if (refreshToken && !isTokenExpired(refreshToken)) {
      const newTokens = await handleRefreshToken(refreshToken);
      const res = NextResponse.next();
      res.cookies.set(COOKIES_KEYS.accessToken, newTokens?.data?.accessToken);
      res.cookies.set(COOKIES_KEYS.refreshToken, newTokens?.data?.refreshToken);
      accessToken = newTokens?.data?.accessToken;
      isAccessTokenValid = !isTokenExpired(accessToken);
      return res;
    }
  }

  if (!isAccessTokenValid && url.pathname !== ROUTES.login?.url) {
    const loginUrl = new URL(ROUTES.login?.url, request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isAccessTokenValid && url.pathname === ROUTES.login?.url) {
    const session = new URL(ROUTES.root?.url, request.url);
    return NextResponse.redirect(session);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)", "/"],
};

const handleRefreshToken = async (refreshToken: string) => {
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
    return null;
  }

  return await response.json();
};
