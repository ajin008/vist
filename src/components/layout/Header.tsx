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

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const main = document.querySelector("main");
    if (main) {
      main.style.transition =
        "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
      main.style.opacity = "0";
      main.style.transform = "translateY(20px)";
      main.style.filter = "blur(10px)";
    }

    setTimeout(() => {
      window.location.href = href;
    }, 500);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[120] transition-all duration-500 ease-in-out ${
          isScrolled || isMenuOpen
            ? "bg-white/90 backdrop-blur-md border-b border-stone-200 h-16 md:h-20"
            : "bg-transparent h-20 md:h-28 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto h-full px-6 flex justify-between items-center">
          <Link
            href="/"
            onClick={(e) => handleNavigation(e, "/")}
            className="text-xl md:text-2xl font-bold tracking-tighter text-black z-[130]"
          >
            VIST<span className="text-indigo-600">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {["portfolio", "services", "about"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                onClick={(e) => handleNavigation(e, `/${item}`)}
                className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
                  isScrolled ? "text-black" : "text-stone-500"
                } hover:text-indigo-600`}
              >
                {item === "portfolio" ? "Work" : item}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={(e) => handleNavigation(e, "/contact")}
              className="px-7 py-2.5 rounded-full text-[10px] uppercase font-bold bg-black text-white hover:bg-stone-800 transition-colors"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-[130] p-2 flex flex-col justify-center items-end gap-1.5 w-10 h-10"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-[110] flex flex-col justify-center px-8 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {[
            { label: "Work", path: "/portfolio" },
            { label: "Services", path: "/services" },
            { label: "About", path: "/about" },
            { label: "Contact", path: "/contact" },
          ].map((link, index) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={(e) => handleNavigation(e, link.path)}
              className={`text-5xl font-bold tracking-tighter transition-all duration-500 delay-[${
                index * 100
              }ms] ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:text-indigo-600`}
            >
              {link.label}
              <span className="text-indigo-600">.</span>
            </Link>
          ))}
        </nav>

        <div
          className={`mt-20 transition-all duration-700 delay-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-stone-400 text-xs uppercase tracking-widest font-bold mb-4">
            Get in touch
          </p>
          <a
            href="mailto:hello@vist.com"
            className="text-xl font-medium border-b border-black"
          >
            hello@vist.com
          </a>
        </div>
      </div>
    </>
  );
}
