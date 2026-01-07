"use client";
import React, { useRef } from "react";
import { useHeroAnimation } from "@/src/hooks/useHeroAnimation";
import { useRouter } from "next/navigation";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  // Connect the glue layer
  useHeroAnimation(containerRef, titleRef, buttonRef);

  const handleNavigateToServices = () => {
    router.push("/services");
  };

  return (
    <section
      ref={containerRef}
      className="full-bleed min-h-screen flex items-center justify-center  overflow-hidden"
    >
      <div className="page-container text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-8xl font-medium max-w-5xl mx-auto text-primary uppercase tracking-tighter"
        >
          Vist: Where your <span className="text-accent italic">vision</span>{" "}
          finds its voice.
        </h1>
        <div className="mt-16">
          <a href="/services">
            <button
              ref={buttonRef}
              className="px-10 py-4 bg-primary border border-default hover:border-accent text-primary rounded-full text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer"
            >
              Begin the Journey
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
