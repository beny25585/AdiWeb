"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ProjectCard.module.css";
import { useTranslations, useLocale } from "next-intl";

type Project = {
  slug: string;
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const locale = useLocale();

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
