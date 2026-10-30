"use client";

import { useId } from "react";
import { useTranslations } from "next-intl";
import { portfolioProjects } from "@/data/projects";
import styles from "@/styles/ProjectCard.module.css";
import ProjectCard from "./ProjectCard";

type Props = {
  currentSlug: string;
};

export default function SelectedProjects({ currentSlug }: Props) {
  const t = useTranslations("featuredProjects");
  const headingId = useId();
  const selectedProjects = portfolioProjects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 3);

  if (selectedProjects.length === 0) return null;

  return (
    <section className={styles.selectedProjects} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.selectedHeading}>
        {t("title")}
      </h2>
      <div className={styles.selectedGrid}>
        {selectedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
