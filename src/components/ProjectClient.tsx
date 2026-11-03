"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { FiArrowLeft } from "react-icons/fi";
import { architectureProjects, portfolioProjects, type Project } from "@/data/projects";
import CloudinaryVideo from "./CloudinaryVideo";
import ProjectGallery from "./ProjectGallery";
import ProjectNavigation from "./ProjectNavigation";
import SelectedProjects from "./SelectedProjects";
import ProjectMediaLabel from "./ProjectMediaLabel";

type Props = {
  currentSlug: string;
  dir: "rtl" | "ltr";
  title: string;
  description: string;
  images: string[];
  video?: string[];
  videoPresentation?: Project["videoPresentation"];
  mediaType?: Project["mediaType"];
};

export default function ProjectClient({
  currentSlug,
  dir,
  title,
  description,
  images,
  video,
  videoPresentation,
  mediaType,
}: Props) {
  const locale = useLocale();
  const t = useTranslations("projectPage");
  const tMedia = useTranslations("projects.media");
  const navigationProjects = portfolioProjects.some((p) => p.slug === currentSlug)
    ? portfolioProjects
    : architectureProjects;
  const currentIndex = navigationProjects.findIndex((p) => p.slug === currentSlug);
  const previousProject =
    currentIndex > 0 ? navigationProjects[currentIndex - 1] ?? null : null;
  const nextProject =
    currentIndex >= 0 ? navigationProjects[currentIndex + 1] ?? null : null;

  return (
    <main
      dir={dir}
      className="tw:bg-[#faf8f4] tw:px-5 tw:pt-6 tw:pb-10 tw:text-[#11110f] tw:selection:bg-[#c6ad80] tw:selection:text-[#11110f] tw:sm:px-8 tw:sm:pt-8 tw:sm:pb-12 tw:lg:px-12"
    >
      <div className="tw:mx-auto tw:max-w-[1200px]">
        <header className="tw:mb-6 tw:sm:mb-8">
          <Link
            href={`/${locale}/projects`}
            className="tw:mb-4 tw:inline-flex tw:min-h-11 tw:items-center tw:gap-2 tw:py-2 tw:text-sm tw:font-medium tw:text-[#75603b] tw:no-underline tw:underline-offset-4 tw:hover:underline tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#75603b]"
          >
            <FiArrowLeft
              aria-hidden="true"
              className="tw:size-4 tw:shrink-0 tw:rtl:-scale-x-100"
            />
            {t("backToProjects")}
          </Link>
          <h1
            id="project-title"
            className="tw:m-0 tw:max-w-[36ch] tw:text-[clamp(1.75rem,3vw,2.5rem)] tw:leading-tight tw:font-medium tw:tracking-[-0.025em] tw:wrap-anywhere tw:text-balance tw:text-[#11110f]"
          >
            {title}
          </h1>
          <ProjectMediaLabel mediaType={mediaType} label={tMedia("visualization")} />
          <p className="tw:mt-3 tw:max-w-[75ch] tw:whitespace-pre-line tw:text-base tw:leading-relaxed tw:text-[#625c51]">
            {description}
          </p>
        </header>

        <ProjectGallery
          key={`${locale}:${currentSlug}`}
          images={images}
          title={title}
          labelledBy="project-title"
        />

        {video && video.length > 0 && (
          <section
            aria-labelledby="project-videos-title"
            className="tw:mt-8 tw:border-t tw:border-[#d4cfc5] tw:pt-6 tw:sm:mt-10 tw:sm:pt-8"
          >
            <h2
              id="project-videos-title"
              className="tw:m-0 tw:mb-5 tw:text-xl tw:leading-snug tw:font-medium tw:text-[#11110f] tw:sm:text-2xl"
            >
              {t("videosTitle")}
            </h2>
            <div
              className={`tw:grid tw:items-start tw:gap-4 ${video.length > 1 ? "tw:md:grid-cols-2" : ""}`}
            >
              <CloudinaryVideo
                publicIds={video}
                mode="project"
                presentation={videoPresentation}
              />
            </div>
          </section>
        )}

        <SelectedProjects currentSlug={currentSlug} />
        <ProjectNavigation
          previousProject={previousProject}
          nextProject={nextProject}
        />
      </div>
    </main>
  );
}
