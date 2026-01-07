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

  // Prevent scrolling when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-stone-200 h-16 md:h-20"
          : "bg-transparent h-20 md:h-28 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-full px-6 flex justify-between items-center">
        {/* Logo - Ensuring it stays visible and high z-index */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tighter text-primary z-[110]"
        >
          VIST<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {["Work", "Services", "About"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${
                isScrolled ? "text-stone-900" : "text-stone-500"
              } hover:text-accent`}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-7 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold bg-black text-white hover:bg-accent transition-all duration-300"
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile Toggle - Fix: Ensure visibility with explicit colors */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-[110] p-2 flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* Top Line */}
          <span
            className={`h-0.5 w-6 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "bg-black rotate-45 translate-y-2" : "bg-black"
            }`}
          />
          {/* Middle Line */}
          <span
            className={`h-0.5 w-6 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Bottom Line */}
          <span
            className={`h-0.5 w-6 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "bg-black -rotate-45 -translate-y-2" : "bg-black"
            }`}
          />
        </button>

        {/* Mobile Full-Screen Overlay */}
        <div
          className={`fixed inset-0 bg-[#fafaf9] z-[105] flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible translate-y-full"
          }`}
        >
          {["Work", "Services", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-bold tracking-tighter text-primary active:text-accent"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
