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
  const t = useTranslations("finishing");
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => window.innerWidth <= 768;
    let isMobile = checkMobile();

    const setupAnimation = () => {
      // Clear any existing animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      isMobile = checkMobile();

      if (isMobile && sectionRef.current && cardsRef.current.length > 0) {
        // Simple scroll-triggered animations for mobile
        cardsRef.current.forEach((card) => {
          if (!card) return;

          gsap.fromTo(
            card,
            {
              y: 20,
              scale: 0.95,
            },
            {
              y: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    };

    setupAnimation();

    // Re-setup on resize
    const handleResize = () => {
      const wasMobile = isMobile;
      isMobile = checkMobile();
      if (wasMobile !== isMobile) {
        setupAnimation();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.specialtiesWrapper} ref={sectionRef}>
      <div className={styles.specialtiesColumn}>
        <div className={styles.headerSection}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </div>

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
