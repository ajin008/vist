"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { initInviteAnimation, initMagneticButton } from "@/src/animations/home";

export default function Invite() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current || !buttonRef.current)
      return;

    // 1. Entrance Animation
    const animation = initInviteAnimation(
      containerRef.current,
      contentRef.current
    );

    // 2. Magnetic Effect for the CTA
    const cleanupMagnetic = initMagneticButton(buttonRef.current);

    return () => {
      animation.kill();
      cleanupMagnetic();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-56 bg-accent overflow-hidden"
    >
      {/* Visual Decor: Large faint text in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-bold text-white/5 tracking-tighter">
          VIST
        </span>
      </div>

      <div
        ref={contentRef}
        className="page-container relative z-10 text-center"
      >
        <span className="text-white/60 text-xs font-mono mb-8 block uppercase tracking-[0.4em]">
          The Destination
        </span>

        <h2 className="text-5xl md:text-8xl font-medium text-tight mb-16 text-white tracking-tighter">
          Ready to write your <br />
          <span className="italic opacity-80">next chapter?</span>
        </h2>

        <div className="flex justify-center">
          <a
            ref={buttonRef}
            href="/contact"
            className="group relative inline-flex items-center justify-center w-48 h-48 md:w-64 md:h-64 bg-white rounded-full transition-transform duration-300"
          >
            {/* Animated Inner Circle */}
            <div className="absolute inset-2 border border-accent/10 rounded-full group-hover:scale-90 transition-transform duration-500" />

            <span className="relative text-accent font-bold uppercase tracking-widest text-xs md:text-sm text-center px-6">
              Let&apos;s start a <br /> conversation
            </span>

            {/* Hover arrow that appears */}
            <span className="absolute bottom-12 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-accent">
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
    </section>
  );
}
