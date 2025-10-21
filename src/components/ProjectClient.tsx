"use client";
import { useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { initScrollAnimation } from "@/lib/scrollAnimation";
import { projects } from "@/data/projects";
import styles from "@/styles/ProjectCard.module.css";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

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

  useEffect(() => {
    initScrollAnimation();
  }, []);
  window.scrollTo(0, 0);

  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const navigateToProject = (slug: string) => {
    router.push(`/${locale}/projects/${slug}`);
  };
  useEffect(() => {
    if (!galleryRef.current) return;

    console.log("🎬 Initializing lightGallery");

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
      // שמור את המיקום
      savedScrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      console.log("📖 BEFORE OPEN - Saved scroll position:", savedScrollY);

      // גלול מיד למעלה (בלי אנימציה)
      window.scrollTo({ top: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // עכשיו נעול את הגלילה
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      console.log(
        "🔒 Body locked and scrolled to top, will restore to:",
        savedScrollY
      );
    };

    const handleAfterClose = () => {
      console.log("❌ AFTER CLOSE - Restoring to position:", savedScrollY);

      // משחרר את הנעילה
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      console.log("🔓 Body unlocked");

      // מחזיר למיקום המקורי
      setTimeout(() => {
        window.scrollTo({ top: savedScrollY, behavior: "auto" });
        document.documentElement.scrollTop = savedScrollY;
        document.body.scrollTop = savedScrollY;
        console.log("↩️ Scrolled back to:", savedScrollY);
      }, 10);
    };

    const gallery = galleryRef.current;
    gallery.addEventListener("lgBeforeOpen", handleBeforeOpen);
    gallery.addEventListener("lgAfterClose", handleAfterClose);

    console.log("✅ Event listeners attached");

    return () => {
      console.log("🧹 Cleaning up lightGallery");
      gallery.removeEventListener("lgBeforeOpen", handleBeforeOpen);
      gallery.removeEventListener("lgAfterClose", handleAfterClose);
      lg.destroy();
    };
  }, []);

  return (
    <section className={styles.project} dir={dir}>
      {/* כפתורי ניווט עליונים */}
      <div className={styles.navigationButtons}>
        {prevProject && (
          <button
            onClick={() => navigateToProject(prevProject.slug)}
            className={`${styles.navButton} ${styles.prevButton}`}
          >
            <span className={styles.navArrow}>{dir === "rtl" ? "→" : "←"}</span>
            <span>{dir === "rtl" ? "פרויקט קודם" : "Previous Project"}</span>
          </button>
        )}
        {nextProject && (
          <button
            onClick={() => navigateToProject(nextProject.slug)}
            className={`${styles.navButton} ${styles.nextButton}`}
          >
            <span>{dir === "rtl" ? "פרויקט הבא" : "Next Project"}</span>
            <span className={styles.navArrow}>{dir === "rtl" ? "←" : "→"}</span>
          </button>
        )}
      </div>

      <header className={styles.header}>
        <h1 className={styles.projectTitle}>{title}</h1>
        <p className={styles.projectSubtitle}>{description}</p>
      </header>

      <div className={styles.gallery} ref={galleryRef}>
        {images.map((src, i) => (
          <a
            key={i}
            href={src}
            data-lg-size="1600-1200"
            className={styles.imageWrapper}
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

      {/* כפתורי ניווט תחתונים */}
      <div className={`${styles.navigationButtons} ${styles.bottomNav}`}>
        {prevProject && (
          <button
            onClick={() => navigateToProject(prevProject.slug)}
            className={`${styles.navButton} ${styles.prevButton}`}
          >
            <span className={styles.navArrow}>{dir === "rtl" ? "→" : "←"}</span>
            <span>{dir === "rtl" ? "פרויקט קודם" : "Previous Project"}</span>
          </button>
        )}
        {nextProject && (
          <button
            onClick={() => navigateToProject(nextProject.slug)}
            className={`${styles.navButton} ${styles.nextButton}`}
          >
            <span>{dir === "rtl" ? "פרויקט הבא" : "Next Project"}</span>
            <span className={styles.navArrow}>{dir === "rtl" ? "←" : "→"}</span>
          </button>
        )}
      </div>
    </section>
  );
}
