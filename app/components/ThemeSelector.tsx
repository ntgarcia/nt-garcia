"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "@phosphor-icons/react";

export default function ThemeSelector({ isMobile = false }: { isMobile?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, show the theme switcher
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (isMobile) {
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="inline-flex items-center space-x-2 py-2 hover:text-primary transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun size={20} weight="fill" />
        ) : (
          <Moon size={20} weight="fill" />
        )}
        <span>Switch Theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`flex items-center justify-center p-1.5 rounded-full transition-all hover:scale-110 clickable ${
        theme === "dark" 
          ? "bg-white/90 hover:bg-white" 
          : "bg-foreground hover:bg-foreground/90"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} weight="fill" className="text-background" />
      ) : (
        <Moon size={20} weight="fill" className="text-background" />
      )}
    </button>
  );
}
