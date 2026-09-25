import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, authToken } from "../../lib/auth";

// Only allow redirects back into this site, never to another origin.
function safeNext(value: FormDataEntryValue | null): string {
  const next = typeof value === "string" ? value : "";
  return next.startsWith("/") && !next.startsWith("//") ? next : "/";
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const next = safeNext(form.get("next"));
  const password = process.env.SITE_PASSWORD;

  if (!password || form.get("password") !== password) {
    const retry = new URL("/login", request.url);
    retry.searchParams.set("error", "1");
    if (next !== "/") retry.searchParams.set("next", next);
    return NextResponse.redirect(retry, 303);
  }

  const response = NextResponse.redirect(new URL(next, request.url), 303);
  response.cookies.set(AUTH_COOKIE, await authToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return response;
}
