"use client";

import Link from "next/link";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { projects } from "@/data/projects";
import { useTranslations, useLocale } from "next-intl";
import styles from "@/styles/FeaturedProjects.module.css";

export default function FeaturedProjects() {
  const t = useTranslations("projects");
  const tH = useTranslations("featuredProjects");
  const locale = useLocale();

  const items = projects.map((p, i) => (
    <Link
      key={i}
      href={`/${locale}/projects/${p.slug}`}
      className={styles.projectLink}
    >
      <div className={styles.imageWrap}>
        <div className={styles.card}>
          <Image
            src={p.image}
            alt={t(`${p.slug}.title`)}
            fill
            className={styles.image}
          />
          <div className={styles.logoWrapper}>
            <Image
              src="/Photos/A&S-removebg.png"
              alt="Logo"
              width={60}
              height={60}
              className={styles.logo}
            />
          </div>
        </div>
        <div className={styles.overlay}>
          <h3>{t(`${p.slug}.title`)}</h3>
        </div>
      </div>
    </Link>
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
      <div className={styles.right}>
        <h2>{tH("title")}</h2>
        <p>{tH("desc")}</p>
        <Link href={`/${locale}/projects`} className={styles.btn}>
          {tH("cta")}
        </Link>
      </div>
    </section>
  );
}
