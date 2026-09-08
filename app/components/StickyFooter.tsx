"use client";

export default function StickyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-4 md:px-13 py-4 md:py-6">
      <div className="mx-auto font-medium tracking-tight text-[#666666] mix-blend-difference">
        ©{currentYear} Nathan Garcia
      </div>
    </footer>
  );
}
