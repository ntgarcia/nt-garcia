"use client";

import { motion } from "framer-motion";
import { useHeroCollapsed } from "./HeroLogoProvider";

export default function Header() {
  const collapsed = useHeroCollapsed();

  return (
    <header className="flex flex-col justify-center py-12">
      {!collapsed && (
        <motion.img
          layoutId="site-signature"
          src="/signature.png"
          alt="Nathan Garcia"
          className="w-full max-w-md md:max-w-lg h-auto mb-6 -ml-1"
        />
      )}
      <p className="max-w-2xl tracking-tight leading-relaxed text-[#666666]">
        Nathan Garcia is a graphic designer based in Calgary, Alberta,
        working across brand identity, event flyers, and merch design for
        artists, festivals, and student organizations. Currently studying
        Computer Information Systems at Mount Royal University, and
        Communication Designer at{" "}
        <a
          href="https://www.mruhacks.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-black"
        >
          MRUHacks
        </a>
        .
      </p>
    </header>
  );
}
