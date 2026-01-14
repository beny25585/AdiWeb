/* src/components/SpecialtiesSection.tsx */
"use client";

import styles from "@/styles/SpecialtiesSection.module.css";
import { useTranslations } from "next-intl";
import {
  FaTools,
  FaPaintRoller,
  FaDoorOpen,
  FaCouch,
  FaBolt,
  FaHammer,
} from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpecialtiesSection() {
  /* --------------------------------------------------------------
     Internationalised strings – they are deterministic on server &
     client, so they never cause a hydration mismatch.
     -------------------------------------------------------------- */
  const t = useTranslations("finishing");

  /* --------------------------------------------------------------
     Refs for the root element and each card.
     -------------------------------------------------------------- */
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  /* --------------------------------------------------------------
     Data that drives the UI.
     -------------------------------------------------------------- */
  const specialties = [
    {
      icon: <FaTools />,
      title: t("specialties.gypsum.title"),
      desc: t("specialties.gypsum.desc"),
      color: "#60400a",
    },
    {
      icon: <FaPaintRoller />,
      title: t("specialties.flooring.title"),
      desc: t("specialties.flooring.desc"),
      color: "#8B5A1A",
    },
    {
      icon: <FaDoorOpen />,
      title: t("specialties.doors.title"),
      desc: t("specialties.doors.desc"),
      color: "#A06D2A",
    },
    {
      icon: <FaCouch />,
      title: t("specialties.carpentry.title"),
      desc: t("specialties.carpentry.desc"),
      color: "#60400a",
    },
    {
      icon: <FaBolt />,
      title: t("specialties.electrical.title"),
      desc: t("specialties.electrical.desc"),
      color: "#8B5A1A",
    },
    {
      icon: <FaHammer />,
      title: t("specialties.renovation.title"),
      desc: t("specialties.renovation.desc"),
      color: "#A06D2A",
    },
  ];

  /* --------------------------------------------------------------
     G S A P  –  set up the scroll‑triggered animations.
     -------------------------------------------------------------- */
  useEffect(() => {
    // Bail out on the server.
    if (typeof window === "undefined") return; // SSR guard
    if (window.innerWidth <= 768) return;

    /**
     * Helper that creates a from‑to animation for a single card.
     */
    const animateCard = (card: HTMLElement | undefined, idx: number) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: idx * 0.01,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
            refreshPriority: -999,
          },
        }
      );
    };

    // Attach the animation to every card that rendered.
    cardsRef.current.forEach((card, i) => {
      if (card) animateCard(card, i);
    });

    // Keep ScrollTrigger in sync when the viewport size changes.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);

    // Improve mobile touch scrolling support
    window.addEventListener("touchmove", refresh, { passive: true });

    // Cleanup on unmount.
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", refresh);
      window.removeEventListener("orientationchange", refresh);
      window.removeEventListener("touchmove", refresh);
    };
  }, []);

  /* --------------------------------------------------------------
     JSX – the visual markup.
     -------------------------------------------------------------- */
  return (
    <div className={styles.specialtiesWrapper} ref={sectionRef}>
      <div className={styles.specialtiesColumn}>
        {/* Header */}
        <div className={styles.headerSection}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </div>

        {/* Card grid */}
        <div className={styles.specialtiesGrid}>
          {specialties.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={styles.card}
              style={
                {
                  "--card-color": item.color,
                  "--card-index": index,
                } as React.CSSProperties
              }
            >
              <div className={styles.cardBackground}></div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{item.icon}</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>

                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
