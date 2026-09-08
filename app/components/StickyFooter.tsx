"use client";

export default function StickyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-[1000px] mx-auto text-xs text-muted">
        © {currentYear} Nathan Garcia
      </div>
    </footer>
  );
}
