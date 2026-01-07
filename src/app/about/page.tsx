"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`py-20 md:py-40 bg-transparent relative z-10 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Header & Location Marker */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
          <div className="max-w-2xl">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] block mb-4">
              Our Essence
            </span>
            <h2 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-8">
              We build <span className="text-stone-300 italic">digital</span>{" "}
              <br />
              legacies<span className="text-indigo-600">.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              VIST is a boutique digital studio specializing in high-end web
              experiences and AI-driven automation. We bridge the gap between
              aesthetic excellence and technical precision.
            </p>
          </div>

          {/* Kozhikode Pulsing Marker */}
          <div className="relative p-8 bg-white rounded-3xl border border-stone-100 shadow-sm flex items-center gap-4 self-center md:self-start">
            <div className="relative flex h-4 w-4">
              {/* Outer Pulse */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              {/* Solid Inner Dot */}
              <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-600"></span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 leading-none mb-1">
                Operating From
              </p>
              <p className="text-lg font-bold text-slate-900 leading-none uppercase tracking-tighter">
                Kozhikode, IN
              </p>
            </div>
          </div>
        </div>

        {/* Stats / Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone-100 pt-16">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Vision
            </h3>
            <p className="text-slate-500 leading-relaxed">
              To redefine the boundaries of what a digital agency can be by
              integrating Artificial Intelligence into the creative process.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Craft
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Every line of code and every pixel is placed with intent. We
              don&apos;t just build websites; we curate digital environments.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Roots
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Deeply rooted in the vibrant tech landscape of Kozhikode, serving
              clients across the globe with Kerala&apos;s signature precision.
            </p>
          </div>
        </div>

        {/* Dynamic Image/Card Section */}
        <div className="mt-32 relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden group">
          <Image
            src="/about.jpg"
            alt="Vist Digital Studio"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-12 left-12 text-white">
            <h4 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Human Intelligence.
              <br />
              Artificial Speed.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
