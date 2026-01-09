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
              VIST is a multi-disciplinary studio bridging the gap between
              <span className="font-medium text-slate-900">
                {" "}
                creative excellence
              </span>{" "}
              and
              <span className="font-medium text-slate-900">
                {" "}
                operational precision
              </span>
              . From high-end web experiences to complex financial compliance,
              we fuel every aspect of the modern enterprise.
            </p>
          </div>

          {/* Kozhikode Pulsing Marker */}
          <div className="relative p-8 bg-white rounded-3xl border border-stone-100 shadow-sm flex items-center gap-4 self-center md:self-start">
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
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

        {/* Philosophy Grid - Now with 4 columns to include Finance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-stone-100 pt-16">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Vision
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              To redefine the boundaries of a digital agency by integrating
              Artificial Intelligence and high-level strategy into the creative
              process.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Craft
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Every line of code and every pixel is placed with intent. We
              don&apos;t just build websites; we curate digital environments.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Financial Rigor
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Beyond the screen, we manage the vitals. Our taxation and
              financial advisory services ensure your business stays compliant
              and ready for scale.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              Our Roots
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Deeply rooted in the tech landscape of Kozhikode, serving global
              clients with Kerala&apos;s signature precision and work ethic.
            </p>
          </div>
        </div>

        {/* Dual Focus Section */}
        {/* <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-12 rounded-[2rem] text-white flex flex-col justify-between min-h-[400px]">
            <h4 className="text-3xl font-bold tracking-tight">
              Digital & AI
              <br />
              <span className="text-slate-500">Innovation</span>
            </h4>
            <p className="text-slate-400">
              Transforming ideas into high-performance web experiences and
              automated workflows.
            </p>
          </div>
          <div className="bg-stone-100 p-12 rounded-[2rem] text-slate-900 flex flex-col justify-between min-h-[400px]">
            <h4 className="text-3xl font-bold tracking-tight">
              Finance & Tax
              <br />
              <span className="text-stone-400">Architecture</span>
            </h4>
            <p className="text-slate-500">
              Handling GST, TDS, and financial modeling so you can focus on
              building your empire.
            </p>
          </div>
        </div> */}

        {/* Dynamic Image/Card Section */}
        <div className="mt-12 relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden group">
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
              Creative Vision.
              <br />
              Analytical Depth.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
