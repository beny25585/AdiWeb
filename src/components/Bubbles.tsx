// components/Bubbles.tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "@/styles/Architecture.module.css";

export default function Bubbles() {
  const container = useRef(null);

  useEffect(() => {
    const bubbles = gsap.utils.toArray(`.${styles.circle}`);

    bubbles.forEach((bubble: any) => {
      gsap.set(bubble, {
        x: gsap.utils.random(0, window.innerWidth),
        y: gsap.utils.random(0, window.innerHeight),
      });

      moveRandom(bubble);
    });

    function moveRandom(el: any) {
      gsap.to(el, {
        duration: gsap.utils.random(6, 12),
        x: `+=${gsap.utils.random(-200, 200)}`,
        y: `+=${gsap.utils.random(-200, 200)}`,
        ease: "sine.inOut",
        onComplete: () => moveRandom(el), 
      });
    }
  }, []);

  return (
    <div ref={container}>
      <div className={`${styles.circle} ${styles.bubble1}`} />
      <div className={`${styles.circle} ${styles.bubble2}`} />
      <div className={`${styles.circle} ${styles.bubble3}`} />
      <div className={`${styles.circle} ${styles.bubble4}`} />
      <div className={`${styles.circle} ${styles.bubble5}`} />
      <div className={`${styles.circle} ${styles.bubble6}`} />
      <div className={`${styles.circle} ${styles.bubble7}`} />
      <div className={`${styles.circle} ${styles.bubble8}`} />
    </div>
  );
}
