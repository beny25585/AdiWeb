"use client";

import { ReactNode, useEffect, useRef } from "react";

interface AnimatedProps {
  children: ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function Animated({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  threshold = 0.1,
}: AnimatedProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null); // שמור את ה-observer ב-ref

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimatedRef.current) return;

    const triggerAnimation = () => {
      if (hasAnimatedRef.current) return;

      element.classList.add("aos-animate");
      hasAnimatedRef.current = true;

      // ניתוק מיידי של observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            if (delay > 0) {
              setTimeout(triggerAnimation, delay);
            } else {
              triggerAnimation();
            }
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observerRef.current.observe(element);

    // בדיקה ראשונית
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInView && !hasAnimatedRef.current) {
      if (delay > 0) {
        setTimeout(triggerAnimation, delay);
      } else {
        triggerAnimation();
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      data-aos={animation}
      data-aos-duration={duration}
      className={className}
    >
      {children}
    </div>
  );
}
