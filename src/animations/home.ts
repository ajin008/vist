import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fix: Use 'export' for both
export const initHeroAnimations = (
  container: HTMLElement,
  title: HTMLElement,
  button: HTMLElement
) => {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  tl.fromTo(
    title,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, delay: 0.5 }
  ).fromTo(
    button,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1 },
    "-=1"
  );

  gsap.to(title, {
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
    y: -50,
    opacity: 0,
    ease: "none",
    immediateRender: false,
  });

  return tl;
};

export const initMagneticButton = (btn: HTMLElement) => {
  const moveButton = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = btn.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;

    gsap.to(btn, {
      x: x,
      y: y,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const resetButton = () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });
  };

  btn.addEventListener("mousemove", moveButton);
  btn.addEventListener("mouseleave", resetButton);

  return () => {
    btn.removeEventListener("mousemove", moveButton);
    btn.removeEventListener("mouseleave", resetButton);
  };
};

export const initTensionScrollSection = (
  container: HTMLElement,
  text: HTMLElement,
  progressIndicator: HTMLElement
) => {
  // Prevent double-splitting text on re-renders
  if (!text.querySelector(".word")) {
    const words = text.innerText.split(" ");
    text.innerHTML = words
      .map(
        (word) =>
          `<span class="word inline-block mr-[0.2em] opacity-20">${word}</span>`
      )
      .join("");
  }

  const wordSpans = text.querySelectorAll(".word");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "+=150%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true, // Fix for mobile height changes
    },
  });

  tl.to(wordSpans, {
    opacity: 1,
    color: "#1a1a1a", // High-contrast black for words
    stagger: 0.1,
    ease: "none",
  }).to(
    progressIndicator,
    {
      scaleX: 1,
      backgroundColor: "#4f46e5", // Electric Indigo for progress
      ease: "none",
    },
    0
  );

  return tl;
};

export const initSolutionDiagram = (
  container: HTMLElement,
  nodes: HTMLElement[],
  lines: HTMLElement[]
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 60%",
      toggleActions: "play none none reverse",
    },
  });

  // 1. Background Shift to Soft Indigo
  tl.to(container, { backgroundColor: "#eef2ff", duration: 1 });

  // 2. Draw Connection Lines
  tl.fromTo(
    lines,
    { strokeDashoffset: 1000, opacity: 0 },
    {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.inOut",
    },
    "-=0.5"
  );

  // 3. Pop Nodes & Add Floating Idle Animation
  tl.fromTo(
    nodes,
    { scale: 0.8, opacity: 0, y: 20 },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
      onComplete: () => {
        // Subtle floating idle animation
        gsap.to(nodes, {
          y: "-=10",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: { each: 0.5, from: "random" },
        });
      },
    },
    "-=1"
  );

  return tl;
};

export const initInviteAnimation = (
  container: HTMLElement,
  content: HTMLElement
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  tl.fromTo(
    content,
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
  );

  return tl;
};
// ... keep initMagneticButton as is
