"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSelector from "./ThemeSelector";
import {
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (isHomePage) {
      e.preventDefault();
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-background/80 backdrop-blur-sm`}
    >
      <div className="flex items-center justify-between px-8 md:px-16 h-16">
        <Link
          href="/"
          className="font-mono text-sm hover:text-primary transition-colors clickable"
        >
          NT（• ˕ •マ.ᐟ
        </Link>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-foreground"></span>
            <span className="block w-6 h-0.5 bg-foreground"></span>
            <span className="block w-6 h-0.5 bg-foreground"></span>
          </div>
        </button>

        <ul className="hidden md:flex space-x-6 font-mono items-center text-sm">
          <li>
            <Link
              href={isHomePage ? "#works" : "/#works"}
              className="hover:text-primary transition-colors"
              onClick={(e) =>
                handleScrollToSection(e, "#works")
              }
            >
              /works
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-primary transition-colors"
            >
              /blog
            </Link>
          </li>
          <li>
            <Link
              href="/now"
              className="hover:text-primary transition-colors"
            >
              /now
            </Link>
          </li>
          {/* <li>
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              className="hover:text-primary transition-colors"
              onClick={(e) =>
                handleScrollToSection(e, "#contact")
              }
            >
              /contact
            </Link>
          </li> */}
          <div className="flex space-x-2">
            <li>
              <Link
                href="https://github.com/nt-dot"
                className="hover:text-primary transition-colors"
              >
                <GithubLogo size={24} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/nt-dot"
                className="hover:text-primary transition-colors"
              >
                <LinkedinLogo size={24} />
              </Link>
            </li>
          </div>
          <li>
            <ThemeSelector />
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-background transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-100 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-8 font-mono text-sm">
          <li>
            <Link
              href={isHomePage ? "#works" : "/#works"}
              className="block py-2 hover:text-primary transition-colors"
              onClick={(e) =>
                handleScrollToSection(e, "#works")
              }
            >
              /works
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              /blog
            </Link>
          </li>
          <li>
            <Link
              href="/now"
              className="block py-2 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              /now
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/nt-dot"
              className="hover:text-primary transition-colors inline-flex items-center space-x-2 py-2"
            >
              <GithubLogo size={20} />
              <span>GitHub</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/nt-dot"
              className="hover:text-primary transition-colors inline-flex items-center space-x-2 py-2"
            >
              <LinkedinLogo size={20} />
              <span>LinkedIn</span>
            </Link>
          </li>

          <li className="py-2">
            <ThemeSelector />
          </li>
        </ul>
      </div>
    </nav>
  );
}
