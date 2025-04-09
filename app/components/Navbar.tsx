"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-200 w-fit px-6 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-muted`}
    >
      <div className="flex space-x-6 items-center justify-between h-12 font-medium">
        <Link
          href="/"
        >
          <img src="/n-logo.svg" alt="Logo" className="h-4 w-auto fill-black" />
        </Link>

        <ul className="flex space-x-6 items-center text-sm">
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
          {/* <div className="flex space-x-2">
            <li>
              <Link
                href="https://github.com/nt-dot"
                className="hover:text-primary transition-colors"
              >
                <GithubLogo size={20} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/nt-dot"
                className="hover:text-primary transition-colors"
              >
                <LinkedinLogo size={20} />
              </Link>
            </li>
          </div> */}
        </ul>
      </div>

      {/* Mobile menu */}
      {/* <div
        className={`md:hidden absolute left-0 right-0 bg-background transition-all duration-300 overflow-hidden rounded-b-2xl border border-white/20 ${
          menuOpen ? "max-h-100 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-4 text-sm">
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
              href="https://github.com/ntgarcia"
              className="hover:text-primary transition-colors inline-flex items-center space-x-2 py-2"
            >
              <GithubLogo size={20} />
              <span>GitHub</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/ntns"
              className="hover:text-primary transition-colors inline-flex items-center space-x-2 py-2"
            >
              <LinkedinLogo size={20} />
              <span>LinkedIn</span>
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}
