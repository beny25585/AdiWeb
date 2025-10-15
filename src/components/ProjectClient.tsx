"use client";
import { useEffect } from "react";
import { initScrollAnimation } from "@/lib/scrollAnimation";
import styles from "@/styles/ProjectCard.module.css";

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
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <section className={styles.project} dir={dir}>
      <header className={styles.header}>
        <h1 className={styles.projectTitle}>{title}</h1>
        <p className={styles.projectSubtitle}>{description}</p>
      </header>

      <div className={styles.gallery}>
        {images.map((src, i) => (
          <div key={i} className={styles.imageWrapper}>
            <img
              src={src}
              alt={`${title} - Photo ${i + 1}`}
              className={styles.image}
              loading={i < 3 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
