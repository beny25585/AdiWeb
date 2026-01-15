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

// חשוב למובייל
ScrollTrigger.config({
  ignoreMobileResize: true,
});

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
    const ctx = gsap.context(() => {
      const fadeUp = (el: Element | null, delay = 0) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%", // מתחיל מוקדם יותר
              once: true, // רק פעם אחת
            },
          }
        );
      };

      // Header
      fadeUp(titleRef.current);
      fadeUp(introRef.current, 0.1);

      // Image + vision
      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        visionContentRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionContentRef.current,
            start: "top 100%",
            once: true,
          },
        }
      );

      // Services + image
      [serviceCard1Ref, serviceCard2Ref, imageWrapperRef].forEach(
        (ref, index) => {
          fadeUp(ref.current, index * 0.15);
        }
      );

      // Portfolio title
      fadeUp(portfolioTitleRef.current);

      // 🔥 Project cards – batch (הכי חשוב ליציבות)
      ScrollTrigger.batch(projectCardsRef.current.filter(Boolean), {
        start: "top 100%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.1,
            }
          ),
      });
    });

    ScrollTrigger.refresh();
    const delayed = gsap.delayedCall(0.2, () => ScrollTrigger.refresh());

    return () => {
      delayed.kill();
      ctx.revert();
    };
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
              onLoadingComplete={() => ScrollTrigger.refresh()}
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
            src={getImageUrl("the_wine_valley_1_xo7huq.png")}
            alt="house wallpaper"
            fill
            className={styles.photo}
            priority
            onLoadingComplete={() => ScrollTrigger.refresh()}
          />
        </div>
      </div>

      <h2 ref={portfolioTitleRef} className={styles.portfolioTitle}>
        {t("portfolio")}
      </h2>

      <div className={styles.projectsGrid}>
        {projectsList
          .filter((project) => project.arcitecture)
          .map((project, index) => (
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
                onLoadingComplete={() => ScrollTrigger.refresh()}
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
