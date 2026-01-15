// utils/gsapHelpers.ts
import { gsap } from "gsap";

export const fadeUp = (el: Element | null, isMobile: boolean, delay = 0) => {
  if (!el) return;

  gsap.fromTo(
    el,
    { opacity: 0, y: isMobile ? 20 : 40 },
    {
      opacity: 1,
      y: 0,
      duration: isMobile ? 0.5 : 0.8,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    }
  );
};
