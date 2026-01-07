"use client";
import React, { useRef } from "react";
import { useSolutionAnimations } from "@/src/hooks/useSolutionAnimation";

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
    {
      src: "https://www.vectorlogo.zone/logos/notion/notion-icon.svg",
      label: "Plan",
    },
  ];

  useSolutionAnimations(containerRef);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-48 bg-[#FCFCFD] overflow-hidden"
    >
      <div className="page-container">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* LEFT: THE COLORED VISUAL ENGINE */}
          <div className="relative w-full lg:w-1/2 h-[450px] flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 300"
              fill="none"
            >
              <defs>
                {/* The Brand Gradient for the Flow */}
                <linearGradient
                  id="indigoFlow"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
                  <stop
                    offset="50%"
                    stopColor="var(--color-accent)"
                    stopOpacity="1"
                  />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Static Background Paths - Using Accent Soft instead of Gray */}
              <g stroke="var(--color-accent-soft)" strokeWidth="2">
                <path d="M80,60 C150,60 180,150 200,150" />
                <path d="M80,120 C150,120 180,150 200,150" />
                <path d="M80,180 C150,180 180,150 200,150" />
                <path d="M80,240 C150,240 180,150 200,150" />
                <path d="M200,150 L320,150" />
              </g>

              {/* Animated Glowing Pulses */}
              <g
                className="path-pulse"
                stroke="url(#indigoFlow)"
                strokeWidth="3"
                strokeDasharray="15,45"
              >
                <path d="M80,60 C150,60 180,150 200,150" />
                <path d="M80,180 C150,180 180,150 200,150" />
                <path d="M200,150 L320,150" />
              </g>
            </svg>

            {/* Tool Nodes with Color-On-Hover */}
            <div className="absolute left-4 space-y-8">
              {toolIcons.map((tool, i) => (
                <div key={i} className="float-node reveal-item group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_8px_30px_rgba(79,70,229,0.08)] border border-indigo-50 flex items-center justify-center p-3 transition-all duration-500 group-hover:border-indigo-200 group-hover:shadow-indigo-100">
                    <img
                      src={tool.src}
                      alt={tool.label}
                      className="w-full h-full object-contain transition-all duration-500 scale-90 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Central Core - High Contrast Indigo */}
            <div className="reveal-item relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-indigo-600 flex items-center justify-center shadow-[0_20px_50px_rgba(79,70,229,0.3)] rotate-12 transition-transform hover:rotate-0 duration-500">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-[0_0_15px_white]" />
              </div>
              {/* Dynamic Aura */}
              <div className="absolute inset-0 bg-indigo-400/30 blur-3xl -z-10 animate-pulse" />
            </div>

            {/* Result Node - User Focus */}
            <div className="reveal-item absolute right-4">
              <div className="w-20 h-20 rounded-full bg-white shadow-[0_10px_40px_rgba(79,70,229,0.1)] border border-indigo-50 flex items-center justify-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg
                  className="w-8 h-8 text-indigo-400 relative z-10 transition-colors group-hover:text-indigo-600"
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

          {/* RIGHT: CONTENT (Refined Typography) */}
          <div className="w-full lg:w-1/2 space-y-12">
            {[
              {
                id: "01",
                title: "Discover",
                text: "We analyze your vision and decode user pain points.",
              },
              {
                id: "02",
                title: "Build",
                text: "Crafting robust architectures with Electric Indigo precision.",
              },
              {
                id: "03",
                title: "Grow",
                text: "Post-launch support that scales as your vision evolves.",
              },
            ].map((step) => (
              <div key={step.id} className="reveal-item group cursor-default">
                <div className="flex gap-8 items-start">
                  <div className="text-4xl font-black text-indigo-100 group-hover:text-indigo-200 transition-colors">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-lg">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
