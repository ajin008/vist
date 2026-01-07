import { initHeroAnimations, initMagneticButton } from "./../animations/home";
import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useHeroAnimation = (
  containerRef: RefObject<HTMLElement | null>,
  titleRef: RefObject<HTMLElement | null>,
  buttonRef: RefObject<HTMLButtonElement | null>
) => {
  useEffect(() => {
    // Ensure refs are ready
    if (!containerRef.current || !titleRef.current || !buttonRef.current)
      return;

    const container = containerRef.current;
    const title = titleRef.current;
    const button = buttonRef.current;

    // 1. Initialize
    const heroTl = initHeroAnimations(container, title, button);
    const cleanupMagnetic = initMagneticButton(button);

    // 2. Refresh for safety
    ScrollTrigger.refresh();

    // 3. Cleanup
    return () => {
      heroTl.kill();
      cleanupMagnetic();

      // Kill specific ScrollTriggers for this container
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });

      // Reset styles to prevent disappearing content
      gsap.set([title, button], { clearProps: "all" });
    };
  }, [containerRef, titleRef, buttonRef]);
};
