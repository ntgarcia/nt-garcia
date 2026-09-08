"use client";

import Link from "next/link";

export default function StickyHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border px-6 md:px-10 py-4">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-black">
          Nathan Garcia
        </Link>
        <nav className="flex items-center gap-8">
          <a
            href="mailto:naninf.work@gmail.com"
            className="text-sm tracking-wide text-black hover:underline"
          >
            Contact
          </a>
          <a
            href="https://www.instagram.com/nan____inf/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-black hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/ntns/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-black hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1GEjnKFfFki7U3aW8z9r49nArUAGhhl8P/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-black hover:underline"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
