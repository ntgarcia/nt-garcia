export const metadata = {
  title: "Nathan Garcia",
  robots: { index: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const { next, error } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <form
        method="POST"
        action="/api/login"
        className="flex w-full max-w-xs flex-col gap-3"
      >
        <label htmlFor="password" className="text-[var(--text-secondary)]">
          Enter password to view work
        </label>
        <input type="hidden" name="next" value={next ?? "/"} />
        <input
          id="password"
          name="password"
          type="password"
          autoFocus
          required
          autoComplete="current-password"
          className="border border-black px-3 py-2 outline-none focus:border-[var(--text-secondary)]"
        />
        {error && <p className="text-red-600">Incorrect password</p>}
        <button
          type="submit"
          className="bg-black px-3 py-2 font-medium text-white"
        >
          Enter
        </button>
      </form>
    </main>
  );
}
