"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDown, FaComment } from "react-icons/fa";

import styles from "@/styles/Hero.module.css";
import { getImageUrl } from "@/utils/getImageUrl";
import CloudinaryVideo from "./CloudinaryVideo";

const HERO_VIDEO_ID = "v1793332996/วิดิโอที่ใช้ลงเพจ_2_m2vuyl.mov";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reducedMotion.matches) {
      void video.play().catch(() => undefined);
    }

    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) video.pause();
    };

    reducedMotion.addEventListener("change", handleMotionChange);
    return () => {
      reducedMotion.removeEventListener("change", handleMotionChange);
      video.pause();
    };
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
          <CloudinaryVideo
            publicIds={HERO_VIDEO_ID}
            mode="hero"
            heroVideoProps={{
              id: "hero-video",
              ref: videoRef,
              autoPlay: false,
              preload: "metadata",
              poster: getImageUrl("herophoto2"),
              "aria-label": t("videoLabel"),
            }}
          />
        </div>
      </div>
      <FaArrowDown className={styles.scrollHint} aria-hidden="true" />
    </section>
  );
}
