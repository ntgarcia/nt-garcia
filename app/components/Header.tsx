"use client";

export default function Header() {
  return (
    <header className="flex flex-col justify-center py-12">
      <img
        src="/signature.png"
        alt="Nathan Garcia"
        className="w-full max-w-md md:max-w-lg h-auto mb-6 -ml-1"
      />
      <p className="max-w-2xl text-lg md:text-xl tracking-tight leading-relaxed text-[#333333]">
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
      </p>
    </header>
  );
}
