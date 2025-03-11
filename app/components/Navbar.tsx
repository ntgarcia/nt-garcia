"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-background/40 backdrop-blur-sm scrolled" 
          : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-mono text-primary">
          <Link href="/" className="clickable">
            <span className="hidden sm:inline-block"> NT（• ˕ •マ.ᐟ</span>
            <span className="sm:hidden">NT</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center clickable"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 flex flex-col gap-1">
            <span className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 font-mono text-sm">
          <li>
            <Link 
              href={isHomePage ? "#home" : "/#home"} 
              className="hover:text-primary transition-colors"
              onClick={(e) => handleScrollToSection(e, "#home")}
            >
              /home
            </Link>
          </li>
          <li>
            <Link
              href={isHomePage ? "#works" : "/#works"}
              className="hover:text-primary transition-colors"
              onClick={(e) => handleScrollToSection(e, "#works")}
            >
              /works
            </Link>
          </li>
          <li>
            <Link 
              href={isHomePage ? "#blog" : "/#blog"} 
              className="hover:text-primary transition-colors"
              onClick={(e) => handleScrollToSection(e, "#blog")}
            >
              /blog
            </Link>
          </li>
          <li>
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              className="hover:text-primary transition-colors"
              onClick={(e) => handleScrollToSection(e, "#contact")}
            >
              /contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-background transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-60 py-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-4 font-mono text-sm">
          <li>
            <Link 
              href={isHomePage ? "#home" : "/#home"} 
              className="block py-2 hover:text-primary transition-colors"
              onClick={(e) => handleScrollToSection(e, "#home")}
            >
              /home
            </Link>
          </li>
          <li>
            <Link
              href={isHomePage ? "#works" : "/#works"}
              className="block py-2 hover:text-primary transition-colors"
              onClick={(e) => handleScrollToSection(e, "#works")}
            >
              /works
            </Link>
          </li>
          <li>
            <Link 
              href={isHomePage ? "#blog" : "/#blog"} 
              className="block py-2 hover:text-primary transition-colors"
              onClick={(e) => handleScrollToSection(e, "#blog")}
            >
              /blog
            </Link>
          </li>
          <li>
            <Link
              href={isHomePage ? "#contact" : "/#contact"}
              className="block py-2 hover:text-primary transition-colors"
              onClick={(e) => handleScrollToSection(e, "#contact")}
            >
              /contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
