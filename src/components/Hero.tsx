"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaComment } from "react-icons/fa";

import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import { getImageUrl } from "@/utils/getImageUrl";

//import CloudinaryVideo from "./CloudinaryVideo";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);

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
          <Image
            src={getImageUrl("herophoto2")}
            alt="hero photo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
