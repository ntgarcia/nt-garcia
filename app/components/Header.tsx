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
          className="w-full max-w-md md:max-w-lg h-auto mb-8 -ml-1"
        />
      )}
      <p className="max-w-2xl tracking-tight leading-relaxed text-[#666666]">
        is a graphic designer based in Calgary, Alberta,
        working across brand identity, digital and physical assets for
        artists, festivals, and organizations. Currently finishing their
        Bachelor in Computer Information Systems at Mount Royal University.
      </p>
    </header>
  );
}
