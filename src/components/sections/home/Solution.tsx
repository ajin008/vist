"use client";
import React, { useRef } from "react";
import { useSolutionAnimations } from "@/src/hooks/useSolutionAnimation";
import Image from "next/image";

export default function Solution() {
  const containerRef = useRef<HTMLDivElement>(null);

  const toolIcons = [
    {
      src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      label: "Design",
    },
    {
      src: "https://www.vectorlogo.zone/logos/google_drive/google_drive-icon.svg",
      label: "Files",
    },
    {
      src: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
      label: "Sync",
    },
    { src: "https://cdn.simpleicons.org/notion/000000", label: "Plan" },
  ];

  useSolutionAnimations(containerRef);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-[#FCFCFD] overflow-hidden"
    >
      <div className="page-container">
        {/* Main Wrapper: Better gap management and vertical alignment */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* LEFT: THE VISUAL ENGINE */}
          <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center">
            {/* SVG: Scaled to fit container precisely */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="indigoFlow"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
                  <stop offset="50%" stopColor="#4f46e5" stopOpacity="1" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Background Paths */}
              <g stroke="#e0e7ff" strokeWidth="2" strokeLinecap="round">
                <path d="M100,60 C160,60 180,150 200,150" />
                <path d="M100,120 C160,120 180,150 200,150" />
                <path d="M100,180 C160,180 180,150 200,150" />
                <path d="M100,240 C160,240 180,150 200,150" />
                <path d="M200,150 L300,150" />
              </g>

              {/* Animated Pulses */}
              <g
                className="path-pulse"
                stroke="url(#indigoFlow)"
                strokeWidth="3"
                strokeDasharray="20,40"
              >
                <path d="M100,60 C160,60 180,150 200,150" />
                <path d="M100,180 C160,180 180,150 200,150" />
                <path d="M200,150 L300,150" />
              </g>
            </svg>

            {/* Left Column: Tool Icons - Centered within their column */}
            <div className="absolute left-0 md:left-8 flex flex-col justify-between h-full py-12">
              {toolIcons.map((tool, i) => (
                <div key={i} className="float-node reveal-item group">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-xl shadow-indigo-100/50 border border-indigo-50 flex items-center justify-center p-3 transition-all duration-500 group-hover:border-indigo-300">
                    <Image
                      src={tool.src}
                      alt={tool.label}
                      fill
                      unoptimized
                      className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Center: Core Engine */}
            <div className="reveal-item relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-indigo-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40 rotate-12 hover:rotate-0 transition-transform duration-700">
                <div className="w-4 h-4 bg-white rounded-full animate-ping" />
                <div className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]" />
              </div>
              <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] -z-10" />
            </div>

            {/* Right Column: Result Node */}
            <div className="reveal-item absolute right-0 md:right-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-2xl shadow-indigo-100/50 border border-indigo-50 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg
                  className="w-10 h-10 text-indigo-500 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            {[
              {
                id: "01",
                title: "Discover",
                text: "We analyze your vision and decode user pain points with deep research.",
              },
              {
                id: "02",
                title: "Build",
                text: "Crafting robust architectures with Electric Indigo precision and speed.",
              },
              {
                id: "03",
                title: "Grow",
                text: "Post-launch support that scales as your business vision evolves.",
              },
            ].map((step) => (
              <div
                key={step.id}
                className="reveal-item group flex gap-6 items-start"
              >
                <span className="text-4xl md:text-5xl font-black text-indigo-100/80 group-hover:text-indigo-200 transition-colors leading-none">
                  {step.id}
                </span>
                <div className="space-y-2 pt-1 md:pt-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-lg max-w-md">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
