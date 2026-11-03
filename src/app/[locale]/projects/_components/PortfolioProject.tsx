import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { getProjectCoverImageProps } from "@/utils/getProjectCoverImageProps";
import ProjectMediaLabel from "@/components/ProjectMediaLabel";

type Props = {
  project: Pick<Project, "slug" | "cover" | "coverDelivery" | "mediaType">;
  locale: Locale;
  title: string;
  viewLabel: string;
  visualizationLabel: string;
  variant: "featured" | "wide" | "compact" | "standard";
};

const imageSizes = {
  featured:
    "(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1295px) calc(58.333vw - 73px), 684px",
  wide:
    "(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc(100vw - 64px), (max-width: 1023px) calc(50vw - 44px), (max-width: 1295px) calc(50vw - 60px), 588px",
  compact:
    "(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc(100vw - 64px), (max-width: 1023px) calc(50vw - 44px), (max-width: 1295px) calc(25vw - 42px), 282px",
  standard:
    "(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc(100vw - 64px), (max-width: 1023px) calc(50vw - 44px), (max-width: 1295px) calc(33.333vw - 48px), 384px",
} as const;

export function PortfolioArrow() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="tw:size-6 tw:shrink-0 tw:rtl:-scale-x-100"
    >
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  );
}

export default function PortfolioProject({
  project,
  locale,
  title,
  viewLabel,
  visualizationLabel,
  variant,
}: Props) {
  const featured = variant === "featured";
  const Heading = featured ? "h2" : "h3";

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      aria-label={`${viewLabel}: ${title}${project.mediaType === "visualization" ? ` — ${visualizationLabel}` : ""}`}
      className={`tw:group tw:block tw:min-w-0 tw:no-underline tw:focus-visible:outline-2 tw:focus-visible:outline-offset-8 ${
        featured
          ? "tw:text-[#faf8f4] tw:focus-visible:outline-[#e0c89f]"
          : "tw:text-[#11110f] tw:focus-visible:outline-[#75603b]"
      }`}
    >
      <div
        className={`tw:relative tw:aspect-[3/2] tw:overflow-hidden tw:bg-[#ded9cf] ${
          variant === "compact" ? "tw:lg:aspect-square" : ""
        } ${variant === "wide" ? "tw:lg:aspect-[2/1]" : ""} ${
          featured ? "tw:sm:aspect-[2/1]" : ""
        }`}
      >
        <Image
          {...getProjectCoverImageProps(project, featured ? 1400 : 1200)}
          alt=""
          fill
          sizes={imageSizes[variant]}
          preload={featured}
          className="tw:object-cover tw:transition-transform tw:duration-500 tw:ease-out tw:motion-safe:group-hover:scale-[1.035] tw:motion-safe:group-focus-visible:scale-[1.035] tw:motion-reduce:transition-none"
        />
      </div>
      <div
        className={`tw:flex tw:min-h-14 tw:items-start tw:justify-between tw:gap-3 tw:border-b tw:py-3 ${
          featured ? "tw:border-[#c6ad80]/40" : "tw:border-[#d4cfc5]"
        }`}
      >
        <div className="tw:min-w-0">
          <Heading
            className={`tw:m-0 tw:text-base tw:leading-snug tw:font-medium tw:wrap-anywhere tw:underline-offset-4 tw:group-hover:underline tw:group-focus-visible:underline ${
              featured ? "tw:sm:text-xl" : "tw:sm:text-lg"
            } ${
              featured ? "tw:text-[#faf8f4]" : "tw:text-[#11110f]"
            }`}
          >
            {title}
          </Heading>
          <ProjectMediaLabel mediaType={project.mediaType} label={visualizationLabel} tone={featured ? "dark" : "light"} />
          {featured && (
            <p className="tw:mt-1 tw:text-sm tw:text-[#e0c89f]">
              {viewLabel}
            </p>
          )}
        </div>
        <span
          className={`tw:mt-0.5 tw:shrink-0 ${
            featured ? "tw:text-[#e0c89f]" : "tw:text-[#75603b]"
          }`}
        >
          <PortfolioArrow />
        </span>
      </div>
    </Link>
  );
}
