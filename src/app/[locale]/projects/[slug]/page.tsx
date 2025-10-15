import { projectImages } from "@/data/projectImages";
import styles from "@/styles/ProjectCard.module.css";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/i18n";
import * as React from "react";

export default async function ProjectPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const { locale, slug } = params;
  const t = await getTranslations({ locale, namespace: "projects" });
  const dir = locale === "he" ? "rtl" : "ltr";
  const images = projectImages[slug] || [];

  return (
    <section className={styles.project} dir={dir}>
      <header className={styles.header}>
        <div className={styles.textContent}>
          <h1 className={styles.projectTitle}>{t(`${slug}.title`)}</h1>
          <p className={styles.projectSubtitle}>{t(`${slug}.description`)}</p>
        </div>
      </header>

      <div className={styles.gallery}>
        {images.map((src, i) => (
          <div key={`${slug}-${i}`} className={styles.imageWrapper}>
            <Image
              src={src}
              alt={`${t(`${slug}.title`)} - Photo ${i + 1}`}
              width={800}
              height={600}
              className={styles.image}
              loading={i < 3 ? "eager" : "lazy"}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
