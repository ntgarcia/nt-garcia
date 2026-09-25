export const AUTH_COOKIE = "site_auth";

/**
 * The cookie holds a hash of the password rather than the password itself,
 * so changing SITE_PASSWORD automatically logs everyone out. Uses Web Crypto
 * so it runs in both the edge middleware and Node route handlers.
 */
export async function authToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`nt-garcia:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
