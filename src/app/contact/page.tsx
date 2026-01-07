"use client";
import { useState, useEffect } from "react";

export default function ContactPage() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Text & Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] block mb-4">
                Get In Touch
              </span>
              <h2 className="text-5xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.9] mb-10">
                Let’s build <br />
                something <span className="text-stone-300">epic</span>
                <span className="text-indigo-600">.</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-md leading-relaxed mb-12">
                Have an idea that needs a digital heartbeat? Drop a message or
                jump straight into a chat.
              </p>
            </div>

            <div className="space-y-8">
              {/* WhatsApp Option */}
              <a
                href="https://wa.me/6235235096" // Replace with your actual number
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-emerald-100 bg-emerald-50/30 hover:bg-emerald-50 transition-all duration-300 w-fit"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-600">
                    Quick Response
                  </p>
                  <p className="text-lg font-bold text-emerald-900">
                    WhatsApp Me
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-stone-100 shadow-xl shadow-stone-200/50">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-stone-400 ml-4">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-stone-50 border-transparent rounded-2xl focus:bg-white focus:border-indigo-200 focus:ring-0 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-stone-400 ml-4">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-stone-50 border-transparent rounded-2xl focus:bg-white focus:border-indigo-200 focus:ring-0 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-stone-400 ml-4">
                  Interested In
                </label>
                <select className="w-full px-6 py-4 bg-stone-50 border-transparent rounded-2xl focus:bg-white focus:border-indigo-200 focus:ring-0 transition-all outline-none appearance-none">
                  <option>Web Development</option>
                  <option>AI Automation</option>
                  <option>Branding</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-stone-400 ml-4">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-stone-50 border-transparent rounded-2xl focus:bg-white focus:border-indigo-200 focus:ring-0 transition-all outline-none resize-none"
                />
              </div>

              <button className="w-full py-5 bg-black text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-indigo-600 transition-colors duration-300">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
