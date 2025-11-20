"use client";

import Link from "next/link";
import styles from "@/styles/Hero.module.css";
import { useTranslations, useLocale } from "next-intl";
import { heroImages } from "@/data/heroImages";
import AliceCarousel from "react-alice-carousel";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const items = heroImages.map((img, i) => (
    <div key={i} className={styles.slideItem}>
      <Image
        src={img.src}
        alt={img.alt}
        width={800}
        height={600}
        className={styles.slideImage}
      />
    </div>
  ));

  return (
    <section className={styles.hero} data-aos="fade-up">
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
