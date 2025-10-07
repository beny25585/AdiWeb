"use client";

import Link from "next/link";
import styles from "@/styles/Hero.module.css";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { heroImages } from "@/data/heroImages";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const [index, setIndex] = useState(0);
  const loopImages = [...heroImages, ...heroImages];
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index >= heroImages.length) {
      const reset = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 1000);
      return () => clearTimeout(reset);
    }
  }, [index]);

  return (
    <section className={styles.hero}>
      <div className={styles.split}>
        {/* --- צד טקסט --- */}
        <div className={styles.textSide}>
          <h1>{t("headline")}</h1>
          <p>{t("sub")}</p>
          <div className={styles.buttons}>
            <Link href={`/${locale}/projects`} className={styles.buttonPrimary}>
              {t("projectsBtn")}
            </Link>
            <Link href={`/${locale}/contact`} className={styles.buttonSecondary}>
              {t("contactBtn")}
            </Link>
          </div>
        </div>

        {/* --- צד תמונה (קרוסלה) --- */}
        <div className={styles.imageSide}>
          <div
            className={`${styles.slides} ${
              !isTransitioning ? styles.noTransition : ""
            }`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {loopImages.map((img, i) => (
              <div key={i} className={styles.slide}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
