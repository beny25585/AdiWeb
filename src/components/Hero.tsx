"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AliceCarousel from "react-alice-carousel";
import { FaComment } from "react-icons/fa";

import { heroImages } from "@/data/heroImages";
import { getImageUrl } from "@/utils/getImageUrl";

import styles from "@/styles/Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

type HeroImg = {
  src: string;
  alt: string;
};

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);
  const [images, setImages] = useState<HeroImg[]>([]);

  useEffect(() => {
    if (!Array.isArray(heroImages) || heroImages.length === 0) return;
    const clean = heroImages.map((img) => ({
      src: img.src,
      alt: img.alt,
    }));
    setImages(clean);
  }, []);

  const carouselItems = images.map((img, idx) => (
    <div key={idx} className={styles.slideItem}>
      <Image
        src={getImageUrl(img.src)}
        alt={img.alt}
        width={2400}
        height={1600}
        priority={idx === 0}
        className={styles.slideImage}
        style={{ objectFit: "cover" }}
      />
    </div>
  ));

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current!, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

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
                <FaComment className={styles.commentIcon} />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.imageSide}>
          <AliceCarousel
            items={carouselItems}
            autoPlay
            infinite
            autoPlayInterval={5000}
            animationDuration={1000}
            disableDotsControls
            disableButtonsControls
            mouseTracking={false}
            touchTracking={false}
            renderPrevButton={() => null}
            renderNextButton={() => null}
          />
        </div>
      </div>
    </section>
  );
}
