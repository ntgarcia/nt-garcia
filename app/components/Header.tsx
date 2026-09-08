"use client";

export default function Header() {
  return (
    <header className="flex flex-col justify-center py-12 max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
        Nathan Garcia is a graphic designer based in Calgary, Alberta,
        working across brand identity, event flyers, and merch design for
        artists, festivals, and student organizations. Currently studying
        Computer Information Systems at Mount Royal University, and
        Communication Designer at{" "}
        <a
          href="https://www.mruhacks.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          MRUHacks
        </a>
        .
      </h1>
    </header>
  );
}
