import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSolutionAnimations = (
  containerRef: React.RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Path Pulse Animation (The "Data Flow")
      gsap.fromTo(
        ".path-pulse",
        { strokeDashoffset: 40, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.5,
          repeat: -1,
          ease: "none",
          stagger: 0.3,
        }
      );

      // 2. Float animation for nodes
      gsap.to(".float-node", {
        y: "-=10",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      // 3. Entrance reveal
      gsap.from(".reveal-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};
