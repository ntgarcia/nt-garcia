"use client";

import Link from "next/link";

export default function StickyHeader() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-13 py-4 md:py-6">
        <div className="mx-auto flex items-center justify-between text-xl">
          <Link
            href="/"
            className="font-medium tracking-tight text-black mix-blend-difference bg-clip-text transition-opacity hover:opacity-70"
          >
            Nathan Garcia
          </Link>
          <nav className="flex items-center gap-6">
            <div className="flex items-center gap-6 ml-4">
              <a
                href="https://www.instagram.com/nan____inf/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium tracking-tight underline transition-opacity hover:opacity-70"
              >
                IG
              </a>
              <a
                href="https://www.linkedin.com/in/ntns/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium tracking-tight underline transition-opacity hover:opacity-70"
              >
                LinkedIn
              </a>
              <a
                href="https://drive.google.com/file/d/1GEjnKFfFki7U3aW8z9r49nArUAGhhl8P/view?usp=sharing"
                target="_blank"
                className="font-medium tracking-tight underline transition-opacity hover:opacity-70"
              >
                CV
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
