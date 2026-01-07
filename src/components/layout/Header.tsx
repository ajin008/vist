"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-stone-200 h-16 md:h-20"
          : "bg-transparent h-20 md:h-28 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-full px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tighter text-black z-[110]"
        >
          VIST<span className="text-indigo-600">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/portfolio"
            className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
              isScrolled ? "text-black" : "text-stone-500"
            }`}
          >
            Work
          </Link>
          <Link
            href="/services"
            className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
              isScrolled ? "text-black" : "text-stone-500"
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
              isScrolled ? "text-black" : "text-stone-500"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-7 py-2.5 rounded-full text-[10px] uppercase font-bold bg-black text-white hover:bg-stone-800 transition-colors"
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-[110] p-2 flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-black transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-[#fafaf9] z-[105] flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0 invisible"
          }`}
        >
          <Link
            href="/portfolio"
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-bold hover:text-indigo-600 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-bold hover:text-indigo-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-bold hover:text-indigo-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-bold hover:text-indigo-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
