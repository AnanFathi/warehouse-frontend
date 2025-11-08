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
