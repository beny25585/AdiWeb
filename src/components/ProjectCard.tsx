"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ProjectCard.module.css";
import { useTranslations, useLocale } from "next-intl";
import type { Project } from "@/data/projects";
import { getImageUrl } from "@/utils/getImageUrl";

type Props = {
  project: Pick<Project, "slug" | "cover">;
  imageSizes?: string;
  imageWidth?: number;
};

export default function ProjectCard({
  project,
  imageSizes = "(max-width: 550px) calc(100vw - 40px), (max-width: 900px) calc(50vw - 30px), (max-width: 1240px) calc(33.333vw - 27px), 387px",
  imageWidth = 900,
}: Props) {
  const t = useTranslations("projects");
  const locale = useLocale();

  return (
    <Link href={`/${locale}/projects/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={getImageUrl(project.cover, imageWidth)}
          alt=""
          fill
          className={styles.image}
          sizes={imageSizes}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{t(`${project.slug}.title`)}</h3>
      </div>
    </Link>
  );
}
