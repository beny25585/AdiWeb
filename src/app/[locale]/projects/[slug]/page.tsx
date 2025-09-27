import { projects } from "@/data/projects";
import Image from "next/image";
import type { Locale } from "@/types/routing";
import styles from "@/styles/ProjectPage.module.css";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const safeLocale: Locale =
    locale === "he" || locale === "en" || locale === "th"
      ? (locale as Locale)
      : "en";

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <h1 style={{ padding: "2rem" }}>
        {safeLocale === "he"
          ? "הפרויקט לא נמצא"
          : safeLocale === "th"
          ? "ไม่พบโครงการ"
          : "Project not found"}
      </h1>
    );
  }

  const title =
    safeLocale === "he"
      ? project.titleHE
      : safeLocale === "th"
      ? project.titleTH
      : project.titleEN;

  const desc =
    safeLocale === "he"
      ? project.descriptionHE
      : safeLocale === "th"
      ? project.descriptionTH
      : project.descriptionEN;

  return (
    <section className={styles.project}>
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={title}
          width={1200}
          height={700}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.location}>📍 {project.location}</p>
        <a href={`/${locale}/contact`} className={styles.cta}>
          צור קשר לגבי פרויקט זה
        </a>
      </div>
    </section>
  );
}
