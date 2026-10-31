"use client";

import { useId } from "react";
import { useTranslations } from "next-intl";
import { portfolioProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type Props = {
  currentSlug: string;
};

export default function SelectedProjects({ currentSlug }: Props) {
  const t = useTranslations("projectPage");
  const headingId = useId();
  const selectedProjects = portfolioProjects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, 3);

  if (selectedProjects.length === 0) return null;

  return (
    <section
      className="tw:mt-10 tw:border-t tw:border-[#d4cfc5] tw:pt-8 tw:sm:mt-12 tw:sm:pt-10"
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="tw:m-0 tw:mb-5 tw:text-xl tw:leading-snug tw:font-medium tw:text-[#11110f] tw:sm:mb-6 tw:sm:text-2xl"
      >
        {t("relatedProjects")}
      </h2>
      <div className="tw:grid tw:grid-cols-1 tw:gap-x-6 tw:gap-y-8 tw:sm:grid-cols-2 tw:lg:grid-cols-3">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant="detail" />
        ))}
      </div>
    </section>
  );
}
