"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const projects = [
  {
    title: "Lens",
    category: "AI Visual Branding",
    img: "/lens.jpg",
    link: "#",
  },
  {
    title: "Jobify",
    category: "Career Platform",
    img: "/jobify.jpg",
    link: "#",
  },
  {
    title: "Learn99",
    category: "EdTech Solution",
    img: "/learn99.jpg",
    link: "#",
  },
  {
    title: "Botanica",
    category: "E-commerce / IoT",
    img: "/botanica.jpg",
    link: "#",
  },
];

/**
 * ProjectCard Component
 * Fixed hover logic with explicit safety checks to prevent client-side crashes.
 */
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // requestAnimationFrame ensures we stay out of the hydration cycle
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const onMouseEnter = () => {
    // CRITICAL FIX: Ensure ref.current exists before calling GSAP
    if (mounted && imgWrapperRef.current) {
      gsap.to(imgWrapperRef.current, {
        scale: 1.05,
        duration: 0.6,
        ease: "power2.out",
        overwrite: true, // Prevents animation stuttering
      });
    }
  };

  const onMouseLeave = () => {
    if (mounted && imgWrapperRef.current) {
      gsap.to(imgWrapperRef.current, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        overwrite: true,
      });
    }
  };

  return (
    <div
      className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-slate-100 relative">
        <div ref={imgWrapperRef} className="img-wrapper w-full h-full relative">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={project.title === "Lens"}
          />
        </div>
      </div>

      <div className="p-8 flex justify-between items-end">
        <div>
          <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-[0.2em] font-bold">
            {project.category}
          </p>
          <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
            {project.title}
          </h3>
        </div>
        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
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
  );
}

export default function PortfolioPage() {
  return (
    // FIX: Removed the nested <main> tag to prevent semantic HTML conflicts with RootLayout
    <section className="py-24 md:py-40 relative z-10 bg-transparent">
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
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
