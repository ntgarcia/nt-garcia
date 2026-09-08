"use client";

export default function Header() {
  return (
    <header className="flex flex-col justify-center py-12">
      <img
        src="/signature.png"
        alt="Nathan Garcia"
        className="w-full max-w-md md:max-w-lg h-auto mb-5 -ml-1"
      />
      <p className="max-w-2xl font-serif text-base md:text-lg leading-[1.7] text-black">
        Nathan Garcia is a graphic designer based in Calgary, Alberta,
        working across brand identity, event flyers, and merch design for
        artists, festivals, and student organizations. Currently studying
        Computer Information Systems at Mount Royal University, and
        Communication Designer at{" "}
        <a
          href="https://www.mruhacks.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          MRUHacks
        </a>
        .
      </p>
    </header>
  );
}
