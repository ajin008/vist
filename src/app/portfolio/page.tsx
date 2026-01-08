"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  { title: "Lens", category: "AI Visual Branding", img: "/lens.jpg" },
  { title: "Jobify", category: "Career Platform", img: "/jobify.jpg" },
  { title: "Learn99", category: "EdTech Solution", img: "/learn99.jpg" },
  { title: "Botanica", category: "E-commerce / IoT", img: "/botanica.jpg" },
  {
    title: "MeerasEstuff",
    category: "Online Marketplace",
    img: "/meerasEstuf.jpg",
  },
];

export default function PortfolioPage() {
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
        <div className="mb-12 md:mb-16">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] block mb-4">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-tight">
            Portfolio<span className="text-indigo-600">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
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
              <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden relative">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
              </div>

              <div className="p-6 md:p-8 flex justify-between items-end">
                <div>
                  <p className="text-[9px] md:text-[10px] text-slate-400 mb-1 uppercase tracking-[0.2em] font-bold">
                    {project.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 -rotate-45"
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
