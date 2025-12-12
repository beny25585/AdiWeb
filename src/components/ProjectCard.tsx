"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ProjectCard.module.css";
import type { Locale } from "@/lib/i18n";
import { useTranslations } from "next-intl";

type Project = {
  slug: string;
  image: string;
};

export default function ProjectCard({
  locale,
  project,
}: {
  locale: Locale;
  project: Project;
}) {
  const t = useTranslations("projects");

  return (
    <Link href={`/${locale}/projects/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={t(`${project.slug}.title`)}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{t(`${project.slug}.title`)}</h3>
      </div>
    </Link>
  );
}
