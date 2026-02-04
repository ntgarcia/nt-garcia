"use client";

export default function Header() {
  return (
    <header className="flex flex-col justify-center py-12">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
        Hi, I'm Nathan.
      </h1>
      <h3 className="text-xl font-medium tracking-tight mb-4">
        I'm a Graphic Designer based in Calgary, Alberta.
        <br />
        Currently studying Computer Information Systems at
        Mount Royal University.
        <br />
        Communication Designer at{" "}
        <a
          href="https://www.mruhacks.com/"
          className="underline"
        >
          MRUHacks
        </a>{" "}
        (prev. Marketing Lead).
        <br />
      </h3>
    </header>
  );
}
