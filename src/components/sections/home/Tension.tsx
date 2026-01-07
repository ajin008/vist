"use client";
import React, { useRef } from "react";
import { useTensionAnimation } from "@/src/hooks/useTensionAnimation";

export default function Tension() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Pass all three refs to the hook
  useTensionAnimation(sectionRef, textRef, progressRef);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-primary overflow-hidden"
    >
      {/* Progress Bar - Essential for the storytelling feel */}
      <div className="absolute top-0 left-0 w-full h-1 bg-stone-100">
        <div
          ref={progressRef}
          className="h-full bg-accent origin-left scale-x-0"
        />
      </div>

      <div className="page-container max-w-4xl">
        <span className="text-accent text-xs font-mono mb-8 block uppercase tracking-[0.3em]">
          01 — The Conflict
        </span>
        <p
          ref={textRef}
          className="text-muted text-3xl md:text-6xl font-medium leading-[1.1] tracking-tighter"
        >
          The digital space is loud, but rarely clear. Most brands are heard,
          but few are understood. We believe your idea deserves more than just
          noise.
        </p>

        {/* Added these subtle details to enhance the "Tension" feel */}
        <div className="mt-16 flex flex-wrap gap-6 md:gap-12 opacity-30 text-[10px] uppercase tracking-widest font-bold">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Saturated Markets
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Generic Solutions
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Vague Messaging
          </div>
        </div>
      </div>
    </section>
  );
}
