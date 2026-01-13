"use client";

import styles from "./Architecture.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations, useLocale } from "next-intl";
import { getImageUrl } from "@/utils/getImageUrl";
import { projectsList } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ArchitecturePage() {
  const locale = useLocale();
  const t = useTranslations("architecture");
  const tp = useTranslations("projects");

  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const visionContentRef = useRef<HTMLDivElement>(null);
  const serviceCard1Ref = useRef<HTMLDivElement>(null);
  const serviceCard2Ref = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const portfolioTitleRef = useRef<HTMLHeadingElement>(null);
  const projectCardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Title animation - fade-down
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: -50 });
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          once: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Intro animation - zoom-in
    if (introRef.current) {
      gsap.set(introRef.current, { opacity: 0, scale: 0.8 });
      gsap.to(introRef.current, {
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 90%",
          once: true,
        },
        opacity: 1,
        scale: 1,
        duration: 0.01,
        delay: 0.2,
        ease: "power2.out",
      });
    }

    // Image container - fade-right
    if (imageContainerRef.current) {
      gsap.set(imageContainerRef.current, { opacity: 0, x: -50 });
      gsap.to(imageContainerRef.current, {
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 90%",
          once: true,
        },
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
      });
    }

    // Vision content - fade-left
    if (visionContentRef.current) {
      gsap.set(visionContentRef.current, { opacity: 0, x: 50 });
      gsap.to(visionContentRef.current, {
        scrollTrigger: {
          trigger: visionContentRef.current,
          start: "top 90%",
          once: true,
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
    }

    // Service cards
    [serviceCard1Ref, serviceCard2Ref, imageWrapperRef].forEach(
      (ref, index) => {
        if (ref.current) {
          gsap.set(ref.current, { opacity: 0, y: 50 });
          gsap.to(ref.current, {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2 + 0.1,
            ease: "power2.out",
          });
        }
      }
    );

    // Portfolio title
    if (portfolioTitleRef.current) {
      gsap.set(portfolioTitleRef.current, { opacity: 0, y: 50 });
      gsap.to(portfolioTitleRef.current, {
        scrollTrigger: {
          trigger: portfolioTitleRef.current,
          start: "top 90%",
          once: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // Project cards - flip-left
    projectCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, { opacity: 0, rotationY: -90, x: 50 });
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true,
          },
          opacity: 1,
          rotationY: 0,
          x: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
        });
      }
    });
  }, []);

  return (
    <section className={styles.container}>
      <h1 ref={titleRef} className={styles.title}>
        {t("title")}
      </h1>

      <p ref={introRef} className={styles.intro}>
        {t("intro")}
      </p>

      <div className={styles.visionSection}>
        <div className={styles.shiraVision}>
          <div ref={imageContainerRef} className={styles.imageContainer}>
            <Image
              src={getImageUrl("/Photos/shiraPhoto.jpg")}
              alt="Architect Shira Uzan"
              height={500}
              width={500}
              className={styles.imageShira}
            />
          </div>

          <div ref={visionContentRef} className={styles.visionContent}>
            <div className={styles.divider}></div>
            <p className={styles.visionText}>{t("shiraBio")}</p>
          </div>
        </div>
      </div>
      <div className={styles.topContainer}>
        <div ref={serviceCard1Ref} className={styles.serviceCard}>
          <h2>{t("design.title")}</h2>
          <p>{t("design.desc")}</p>
        </div>

        <div ref={serviceCard2Ref} className={styles.serviceCard}>
          <h2>{t("construction.title")}</h2>
          <p>{t("construction.desc")}</p>
        </div>

        <div ref={imageWrapperRef} className={styles.imageWrapper}>
          <Image
            src={getImageUrl("/Photos/Architecture/house_wallpaper.jpg")}
            alt="house wallpaper"
            fill
            className={styles.photo}
            priority
          />
        </div>
      </div>

      <h2 ref={portfolioTitleRef} className={styles.portfolioTitle}>
        {t("portfolio")}
      </h2>

      <div className={styles.projectsGrid}>
        {projectsList.filter((project)=>project.arcitecture).map((project, index) => (
          <Link
            key={project.slug}
            href={`/${locale}/projects/${project.slug}`}
            className={styles.projectCard}
            ref={(el) => {
              projectCardsRef.current[index] = el;
            }}
          >
            <Image
              src={getImageUrl(project.cover)}
              alt={tp(`${project.slug}.title`)}
              width={600}
              height={400}
            />
            <div className={styles.projectInfo}>
              <h3>{tp(`${project.slug}.title`)}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.cta}>
        <Link href={`/${locale}/contact`} className={styles.ctaButton}>
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
