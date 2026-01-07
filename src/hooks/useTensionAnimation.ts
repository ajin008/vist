import { useEffect, RefObject } from "react";
import { initTensionScrollSection } from "../animations/home";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useTensionAnimation = (
  sectionRef: RefObject<HTMLElement | null>,
  textRef: RefObject<HTMLElement | null>,
  progressRef: RefObject<HTMLElement | null>
) => {
  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !progressRef.current) return;

    // Call the correct function from home.ts
    const tensionTl = initTensionScrollSection(
      sectionRef.current,
      textRef.current,
      progressRef.current
    );

    return () => {
      tensionTl.kill();
      if (tensionTl.scrollTrigger) tensionTl.scrollTrigger.kill();
      gsap.set(textRef.current, { clearProps: "all" });
    };
  }, [sectionRef, textRef, progressRef]);
};
