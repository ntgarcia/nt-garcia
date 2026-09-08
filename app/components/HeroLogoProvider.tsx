"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const HeroCollapsedContext = createContext(true);

export function HeroLogoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [collapsed, setCollapsed] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setCollapsed(true);
      return;
    }

    const onScroll = () => setCollapsed(window.scrollY > 180);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <HeroCollapsedContext.Provider value={collapsed}>
      {children}
    </HeroCollapsedContext.Provider>
  );
}

export function useHeroCollapsed() {
  return useContext(HeroCollapsedContext);
}
