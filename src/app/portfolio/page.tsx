"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  { title: "Lens", category: "AI Visual Branding", img: "/lens.jpg" },
  { title: "Jobify", category: "Career Platform", img: "/jobify.jpg" },
  { title: "Learn99", category: "EdTech Solution", img: "/learn99.jpg" },
  { title: "Botanica", category: "E-commerce / IoT", img: "/botanica.jpg" },
];

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation as soon as the fresh page mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`py-24 md:py-40 bg-transparent relative z-10 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] block mb-4">
            Selected Works
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">
            Portfolio<span className="text-indigo-600">.</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{
                transitionDelay: `${index * 150}ms`,
                transitionDuration: "800ms",
              }}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm transition-all ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
              </div>

              {/* Text Content */}
              <div className="p-8 flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-[0.2em] font-bold">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-5 h-5 -rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
