"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";
import type { Locale } from "@/lib/i18n";
import styles from "@/styles/FeaturedProjects.module.css";

export default function FeaturedProjects({ locale }: { locale: Locale }) {
  const t = useTranslations("projects");
  const tH = useTranslations("featuredProjects");

  const items = projects.map((p, i) => (
    <div key={i} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={p.image}
          alt={t(`${p.slug}.title`)}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h3>{t(`${p.slug}.title`)}</h3>
        <p>{t(`${p.slug}.location`)}</p>
      </div>
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1200: { items: 3 },
  };

  return (
    <section
      className={`${styles.section} ${
        locale === "he" ? styles.rtl : styles.ltr
      }`}
    >
      <div className={styles.right}>
        <h2>{tH("title")}</h2>
        <p>{tH("desc")}</p>
        <Link href={`/${locale}/projects`} className={styles.btn}>
          {tH("cta")}
        </Link>
      </div>

      <div className={styles.carouselWrapper}>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          infinite
          disableDotsControls
          autoPlayInterval={5000}
          animationDuration={800}
          autoPlay
          renderPrevButton={() => (
            <button className={`${styles.arrow} ${styles.leftArrow}`}>‹</button>
          )}
          renderNextButton={() => (
            <button className={`${styles.arrow} ${styles.rightArrow}`}>
              ›
            </button>
          )}
        />
      </div>
    </section>
  );
}
