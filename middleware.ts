import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, authToken } from "./app/lib/auth";

export async function middleware(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  // No password configured: leave the site open rather than locking
  // everyone out (e.g. local dev without a .env.local).
  if (!password) return NextResponse.next();

  const cookie = request.cookies.get(AUTH_COOKIE)?.value;
  if (cookie && cookie === (await authToken(password))) {
    return NextResponse.next();
  }

  const { pathname, search } = request.nextUrl;

  // Page navigations go to the login screen; anything else (images, API
  // calls) just gets refused so work files can't be hotlinked.
  const acceptsHtml = request.headers.get("accept")?.includes("text/html");
  if (request.method === "GET" && acceptsHtml) {
    const loginUrl = new URL("/login", request.url);
    if (pathname !== "/") loginUrl.searchParams.set("next", pathname + search);
    return NextResponse.redirect(loginUrl);
  }

  return new NextResponse("Unauthorized", { status: 401 });
}

export const config = {
  // Everything except the login flow, Next's build assets, and the few
  // files the login page itself needs.
  matcher: [
    "/((?!login|api/login|_next/static|favicon\\.ico|n-logo\\.svg|signature\\.png).*)",
  ],
};
