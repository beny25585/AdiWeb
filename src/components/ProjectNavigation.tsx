"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import type { Project } from "@/data/projects";

type Props = {
  previousProject: Pick<Project, "slug"> | null;
  nextProject: Pick<Project, "slug"> | null;
};

export default function ProjectNavigation({
  previousProject,
  nextProject,
}: Props) {
  const locale = useLocale();
  const t = useTranslations("projectNavigation");
  const tProjects = useTranslations("projects");
  const tPage = useTranslations("projectPage");

  if (!previousProject && !nextProject) return null;

  return (
    <nav
      aria-label={tPage("navigationLabel")}
      className="tw:mt-8 tw:grid tw:grid-cols-1 tw:gap-4 tw:border-t tw:border-[#d4cfc5] tw:pt-6 tw:sm:mt-10 tw:sm:grid-cols-2 tw:sm:gap-8"
    >
      {previousProject && (
        <Link
          href={`/${locale}/projects/${previousProject.slug}`}
          className="tw:group tw:flex tw:min-h-16 tw:min-w-0 tw:items-center tw:gap-4 tw:py-2 tw:text-[#11110f] tw:no-underline tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#75603b]"
        >
          <FiArrowLeft
            aria-hidden="true"
            focusable="false"
            className="tw:size-5 tw:shrink-0 tw:text-[#75603b] tw:rtl:-scale-x-100"
          />
          <span className="tw:flex tw:min-w-0 tw:flex-col tw:gap-1">
            <span className="tw:text-sm tw:text-[#625c51]">
              {t("previous")}
            </span>
            <span className="tw:text-base tw:leading-snug tw:font-medium tw:wrap-anywhere tw:underline-offset-4 tw:group-hover:underline tw:group-focus-visible:underline tw:sm:text-lg">
              {tProjects(`${previousProject.slug}.title`)}
            </span>
          </span>
        </Link>
      )}
      {nextProject && (
        <Link
          href={`/${locale}/projects/${nextProject.slug}`}
          className="tw:group tw:flex tw:min-h-16 tw:min-w-0 tw:items-center tw:justify-end tw:gap-4 tw:py-2 tw:text-end tw:text-[#11110f] tw:no-underline tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#75603b] tw:sm:col-start-2"
        >
          <span className="tw:flex tw:min-w-0 tw:flex-col tw:gap-1">
            <span className="tw:text-sm tw:text-[#625c51]">{t("next")}</span>
            <span className="tw:text-base tw:leading-snug tw:font-medium tw:wrap-anywhere tw:underline-offset-4 tw:group-hover:underline tw:group-focus-visible:underline tw:sm:text-lg">
              {tProjects(`${nextProject.slug}.title`)}
            </span>
          </span>
          <FiArrowRight
            aria-hidden="true"
            focusable="false"
            className="tw:size-5 tw:shrink-0 tw:text-[#75603b] tw:rtl:-scale-x-100"
          />
        </Link>
      )}
    </nav>
  );
}
