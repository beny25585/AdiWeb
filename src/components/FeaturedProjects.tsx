"use client";

import Link from "next/link";
import styles from "@/styles/FeaturedProjects.module.css";
import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";
import type { Locale } from "@/types/routing";
import { useEffect, useRef } from "react";

export default function FeaturedProjects({ locale }: { locale: Locale }) {
  const t = useTranslations("projects");
  const tH = useTranslations("featuredProjects");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount =
      direction === "left" ? -clientWidth / 1.2 : clientWidth / 1.2;

    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible!);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.right}>
        <h2>{tH("title")}</h2>
        <p>{tH("desc")}</p>
        <Link href={`/${locale}/projects`} className={styles.btn}>
          {tH("cta")}
        </Link>
      </div>
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
        >
          ‹
        </button>

        <div ref={scrollRef} className={styles.left}>
          {projects.map((p, i) => (
            <div key={i} className={`${styles.card}`}>
              <img src={p.image} alt={t(`${p.slug}.title`)} />
              <div className={styles.overlay}>
                <h3>{t(`${p.slug}.title`)}</h3>
                <p>{t(`${p.slug}.location`)}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
        >
          ›
        </button>
      </div>
    </section>
  );
}
