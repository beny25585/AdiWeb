"use client";

import Link from "next/link";
import styles from "@/styles/Hero.module.css";
import { useTranslations, useLocale } from "next-intl";
import { heroImages } from "@/data/heroImages";
import AliceCarousel from "react-alice-carousel";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getImageUrl } from "@/utils/getImageUrl";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);

  const items = heroImages.map((img, i) => (
    <div key={i} className={styles.slideItem}>
      <Image
        src={getImageUrl(img.src)}
        alt={img.alt}
        width={800}
        height={600}
        className={styles.slideImage}
      />
    </div>
  ));

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.split}>
        <div className={styles.textSide}>
          <div className={styles.textBox}>
            <h1>{t("headline")}</h1>
            <p>{t("sub")}</p>
            <div className={styles.buttons}>
              <Link
                href={`/${locale}/projects`}
                className={styles.buttonPrimary}
              >
                {t("projectsBtn")}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className={styles.buttonSecondary}
              >
                {t("contactBtn")}
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.imageSide}>
          <AliceCarousel
            items={items}
            autoPlay
            infinite
            autoPlayInterval={5000}
            animationDuration={1000}
            disableDotsControls
            disableButtonsControls
            mouseTracking={false}
            touchTracking={false}
          />
        </div>
      </div>
    </section>
  );
}
