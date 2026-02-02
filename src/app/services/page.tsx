"use client";
import { useState, useEffect } from "react";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "We define your digital DNA. From visual identity to market positioning, we ensure your brand speaks with a singular, powerful voice.",
    tags: ["Identity", "Strategy", "Positioning"],
  },
  {
    number: "02",
    title: "Web Experience",
    description:
      "High-performance digital platforms. We prioritize speed, accessibility, and immersive user experiences.",
    tags: [
      "Web Development",
      "App Development",
      "E-commerce",
      "SaaS",
      "Custom Solutions",
    ],
  },
  {
    number: "03",
    title: "AI Integration",
    description:
      "Future-proof your business. We implement custom AI solutions and automated workflows to scale your operations effortlessly.",
    tags: ["LLMs", "Automation", "Workflows"],
  },
  {
    number: "04",
    title: "Content Design",
    description:
      "Visual storytelling that converts. We create premium digital assets and motion graphics tailored for high-end audiences.",
    tags: ["Motion", "Graphics", "UI/UX"],
  },
  {
    number: "05",
    title: "Taxation & GST",
    description:
      "End-to-end GST and TDS compliance. We handle everything from registration and monthly filings to E-way bill logistics and tax payments.",
    tags: ["GST Filing", "Registration", "E-Way Bill", "TDS Returns"],
  },
  {
    number: "06",
    title: "Financial Advisory",
    description:
      "Professional financial modeling and project reports designed for loan renewals and business scaling. We turn data into growth strategies.",
    tags: ["Project Reports", "Projections", "Loan Renewal", "CMA Data"],
  },
  {
    number: "07",
    title: "BIM Engineering",
    description:
      "Advanced Building Information Modeling for construction excellence. We deliver precise 3D models, clash detection, and coordinated documentation for seamless project execution.",
    tags: [
      "BIM Modeling",
      "Revit",
      "3D Coordination",
      "MEP Design",
      "Clash Detection",
    ],
  },
];

export default function ServicesPage() {
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
        {/* Header Section */}
        <div className="max-w-3xl mb-20 md:mb-32">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] block mb-4">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9]">
            Solutions for the <br />
            <span className="text-stone-300">Modern Business</span>
            <span className="text-indigo-600">.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-32">
          {services.map((service, index) => (
            <div
              key={service.title}
              style={{
                transitionDelay: `${index * 150}ms`,
                transitionDuration: "800ms",
              }}
              className={`group flex flex-col transition-all ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
            >
              {/* Number and Title */}
              <div className="flex items-start justify-between border-t border-stone-200 pt-8 mb-6">
                <span className="text-indigo-600 font-mono text-sm font-bold">
                  {service.number}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-md">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 rounded-full border border-stone-200 text-[10px] uppercase font-bold tracking-wider text-slate-400 group-hover:border-indigo-200 group-hover:text-indigo-600 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-32 pt-20 border-t border-stone-100 flex flex-col items-center text-center">
          <h4 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Ready to scale?
          </h4>
          <a
            href="/contact"
            className="group relative px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden"
          >
            <span className="relative z-10">Start a Conversation</span>
            <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
