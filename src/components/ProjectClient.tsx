"use client";
import { useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
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

gsap.registerPlugin(ScrollTrigger);

export default function ProjectClient({
  dir,
  title,
  description,
  images,
}: {
  dir: "rtl" | "ltr";
  title: string;
  description: string;
  images: string[];
}) {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const currentSlug = params.slug as string;
  const galleryRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const navigationTopRef = useRef<HTMLDivElement>(null);
  const navigationBottomRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const t = useTranslations("projectNavigation");

  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const navigateToProject = (slug: string) => {
    router.push(`/${locale}/projects/${slug}`);
  };

  // LightGallery setup
  useEffect(() => {
    if (!galleryRef.current) return;

    let savedScrollY = 0;

    const lg = lightGallery(galleryRef.current, {
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
    });

    const handleBeforeOpen = () => {
      savedScrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      window.scrollTo({ top: 0, behavior: "auto" });
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };

    const handleAfterClose = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      setTimeout(() => {
        window.scrollTo({ top: savedScrollY, behavior: "auto" });
      }, 10);
    };

    const gallery = galleryRef.current;
    gallery.addEventListener("lgBeforeOpen", handleBeforeOpen);
    gallery.addEventListener("lgAfterClose", handleAfterClose);

    return () => {
      gallery.removeEventListener("lgBeforeOpen", handleBeforeOpen);
      gallery.removeEventListener("lgAfterClose", handleAfterClose);
      lg.destroy();
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }

      // Top navigation animation
      if (navigationTopRef.current) {
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
      }

      // Images animation - using refs directly
      imageRefs.current.forEach((img, index) => {
        if (img) {
          gsap.fromTo(
            img,
            {
              opacity: 0,
              y: dir === "rtl" ? -40 : 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.1,
            }
          );
        }
      });

      // Bottom navigation animation
      if (navigationBottomRef.current) {
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
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [dir, images.length]);

  return (
    <section className={styles.project} dir={dir}>
      <header className={styles.header} ref={headerRef}>
        <h1 className={styles.projectTitle}>{title}</h1>
        <p className={styles.projectSubtitle}>{description}</p>
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
        {images.map((src, i) => (
          <a
            key={i}
            href={src}
            data-lg-size="1600-1200"
            className={`${styles.imageWrapper} reveal-img`}
          >
            <Image
              src={src}
              alt={`${title} - Photo ${i + 1}`}
              fill
              className={styles.image}
              loading={i < 3 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
