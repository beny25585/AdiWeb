"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { projectsList } from "@/data/projects";
import styles from "@/styles/ProjectCard.module.css";

import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getImageUrl } from "@/utils/getImageUrl";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

type Props = {
  dir: "rtl" | "ltr";
  title: string;
  description: string;
  images: string[];
};

export default function ProjectClient({
  dir,
  title,
  description,
  images,
}: Props) {
  const router = useRouter();
  const params = useParams();
  const locale = (params.locale ?? "en") as string;
  const currentSlug = (params.slug ?? "") as string;

  const galleryRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const navigationTopRef = useRef<HTMLDivElement>(null);
  const navigationBottomRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const t = useTranslations("projectNavigation");

  /* ---------- IMAGES STATE ---------- */
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    if (!images?.length) {
      setImageUrls([]);
      return;
    }
    setImageUrls(images.map((src) => getImageUrl(src)));
  }, [images]);

  /* ---------- NAVIGATION ---------- */
  const currentIndex = projectsList.findIndex((p) => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projectsList[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsList.length - 1
      ? projectsList[currentIndex + 1]
      : null;

  const navigateToProject = (slug: string) =>
    router.push(`/${locale}/projects/${slug}`);

  /* ---------- LIGHTGALLERY ---------- */
  useEffect(() => {
    if (!galleryRef.current || imageUrls.length === 0) return;

    const lg = lightGallery(galleryRef.current, {
      selector: "a",
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
      thumbnail: true,
      animateThumb: true,
      zoomFromOrigin: false,
      allowMediaOverlap: true,
      toggleThumb: true,
      closable: true,
      download: false,
      counter: true,
      enableSwipe: true,
      enableDrag: true,
      swipeThreshold: 50,
    });

    const handleBeforeOpen = () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };

    const handleAfterClose = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      ScrollTrigger.refresh();
    };

    const gallery = galleryRef.current;
    gallery.addEventListener("lgBeforeOpen", handleBeforeOpen);
    gallery.addEventListener("lgAfterClose", handleAfterClose);

    return () => {
      gallery.removeEventListener("lgBeforeOpen", handleBeforeOpen);
      gallery.removeEventListener("lgAfterClose", handleAfterClose);
      lg.destroy();
    };
  }, [imageUrls.length]);

  /* ---------- GSAP + SCROLLTRIGGER ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Top navigation
      gsap.fromTo(
        navigationTopRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      ScrollTrigger.batch(imageRefs.current.filter(Boolean), {
        start: "top 100%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: dir === "rtl" ? -40 : 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
            }
          ),
        onLeaveBack: (batch) =>
          gsap.to(batch, { opacity: 0, y: 40, duration: 0.3 }),
      });

      // Bottom navigation
      gsap.fromTo(
        navigationBottomRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: navigationBottomRef.current,
            start: "top 100%",
          },
        }
      );
    });

    // 🔑 debounce refresh
    const refresh = gsap.delayedCall(0.25, () => ScrollTrigger.refresh());

    return () => {
      refresh.kill();
      ctx.revert();
    };
  }, [dir, imageUrls.length]);

  /* ---------- RENDER ---------- */
  return (
    <section className={styles.project} dir={dir}>
      <header className={styles.header} ref={headerRef}>
        <h1 className={styles.projectTitle}>{title}</h1>
        <p className={styles.projectSListubtitle}>{description}</p>
      </header>

      <div className={styles.navigationButtons} ref={navigationTopRef}>
        {prevProject && (
          <button
            onClick={() => navigateToProject(prevProject.slug)}
            className={`${styles.navButton} ${styles.prevButton}`}
          >
            <span className={styles.navArrow}>{dir === "rtl" ? "→" : "←"}</span>
            <span>{t("previous")}</span>
          </button>
        )}
        {nextProject && (
          <button
            onClick={() => navigateToProject(nextProject.slug)}
            className={`${styles.navButton} ${styles.nextButton}`}
          >
            <span>{t("next")}</span>
            <span className={styles.navArrow}>{dir === "rtl" ? "←" : "→"}</span>
          </button>
        )}
      </div>

      <div className={styles.gallery} ref={galleryRef}>
        {imageUrls.map((url, i) => (
          <a
            key={i}
            href={url}
            data-lg-size="1600-1200"
            className={styles.imageWrapper}
            ref={(el) => {
              imageRefs.current[i] = el;
            }}
          >
            <Image
              src={url}
              alt={`${title} - Photo ${i + 1}`}
              fill
              className={styles.image}
              loading={i < 3 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoadingComplete={() => ScrollTrigger.refresh()}
            />
          </a>
        ))}
      </div>

      <div
        className={`${styles.navigationButtons} ${styles.bottomNav}`}
        ref={navigationBottomRef}
      >
        {prevProject && (
          <button
            onClick={() => navigateToProject(prevProject.slug)}
            className={`${styles.navButton} ${styles.prevButton}`}
          >
            <span className={styles.navArrow}>{dir === "rtl" ? "→" : "←"}</span>
            <span>{t("previous")}</span>
          </button>
        )}
        {nextProject && (
          <button
            onClick={() => navigateToProject(nextProject.slug)}
            className={`${styles.navButton} ${styles.nextButton}`}
          >
            <span>{t("next")}</span>
            <span className={styles.navArrow}>{dir === "rtl" ? "←" : "→"}</span>
          </button>
        )}
      </div>
    </section>
  );
}
