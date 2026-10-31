import "@/styles/tailwind.css";
import { portfolioProjects } from "@/data/projects";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/i18n";
import Link from "next/link";
import PortfolioProject, { PortfolioArrow } from "./_components/PortfolioProject";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  const [featuredProject, ...collection] = portfolioProjects;

  return (
    <main className="tw:bg-[#faf8f4] tw:text-[#11110f] tw:selection:bg-[#c6ad80] tw:selection:text-[#11110f]">
      <section
        aria-labelledby="portfolio-title"
        className="tw:bg-[#11110f] tw:px-5 tw:py-8 tw:sm:px-8 tw:sm:py-10 tw:lg:px-12"
      >
        <div className="tw:mx-auto tw:grid tw:max-w-[1200px] tw:gap-8 tw:lg:grid-cols-12 tw:lg:items-center tw:lg:gap-10">
          <div className="tw:min-w-0 tw:lg:col-span-5">
            <h1
              id="portfolio-title"
              className="tw:m-0 tw:whitespace-pre-line tw:text-[clamp(2.25rem,4vw,3.5rem)] tw:leading-[1.2] tw:font-medium tw:tracking-[-0.025em] tw:text-balance tw:text-[#faf8f4]"
            >
              {t("index.title")}
            </h1>
            <p className="tw:mt-4 tw:max-w-[34ch] tw:text-base tw:leading-relaxed tw:text-[#c9c5bc]">
              {t("index.introduction")}
            </p>
            {collection.length > 0 && (
              <Link
                href="#project-collection"
                className="tw:mt-5 tw:inline-flex tw:min-h-11 tw:items-center tw:gap-3 tw:border-b tw:border-[#c6ad80] tw:py-2.5 tw:text-sm tw:font-medium tw:text-[#e0c89f] tw:underline-offset-4 tw:hover:underline tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f]"
              >
                {t("index.browseProjects")}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="tw:size-5 tw:shrink-0"
                >
                  <path d="M12 4v16m-6-6 6 6 6-6" />
                </svg>
              </Link>
            )}
          </div>

          {featuredProject && (
            <div className="tw:min-w-0 tw:lg:col-span-7">
              <PortfolioProject
                project={featuredProject}
                locale={locale}
                title={t(`${featuredProject.slug}.title`)}
                viewLabel={t("index.viewProject")}
                visualizationLabel={t("media.visualization")}
                variant="featured"
              />
            </div>
          )}
        </div>
      </section>

      {collection.length > 0 && (
        <section
          id="project-collection"
          aria-labelledby="collection-title"
          className="tw:scroll-mt-28 tw:px-5 tw:py-10 tw:sm:px-8 tw:sm:py-12 tw:lg:px-12 tw:lg:py-14"
        >
          <div className="tw:mx-auto tw:max-w-[1200px]">
            <div className="tw:mb-6 tw:flex tw:flex-wrap tw:items-baseline tw:justify-between tw:gap-3 tw:border-b tw:border-[#d4cfc5] tw:pb-4 tw:sm:mb-8">
              <h2
                id="collection-title"
                className="tw:m-0 tw:text-xl tw:leading-snug tw:font-medium tw:tracking-[-0.02em] tw:text-[#11110f] tw:sm:text-2xl"
              >
                {t("index.collectionTitle")}
              </h2>
              <p className="tw:text-sm tw:tabular-nums tw:text-[#625c51]">
                {t("index.projectCount", { count: collection.length })}
              </p>
            </div>

            <ul
              role="list"
              className="tw:m-0 tw:grid tw:list-none tw:grid-cols-1 tw:items-start tw:gap-x-6 tw:gap-y-8 tw:p-0 tw:md:grid-cols-12 tw:md:gap-y-10"
            >
              {collection.map((project, index) => {
                const position = index % 12;
                const variant =
                  position === 0 || position === 8
                    ? "wide"
                    : [1, 2, 6, 7].includes(position)
                      ? "compact"
                      : "standard";
                const columns = {
                  wide: "tw:lg:col-span-6",
                  compact: "tw:lg:col-span-3",
                  standard: "tw:lg:col-span-4",
                };

                return (
                  <li
                    key={project.slug}
                    className={`tw:min-w-0 tw:md:col-span-6 ${columns[variant]}`}
                  >
                    <PortfolioProject
                      project={project}
                      locale={locale}
                      title={t(`${project.slug}.title`)}
                      viewLabel={t("index.viewProject")}
                      visualizationLabel={t("media.visualization")}
                      variant={variant}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      <section
        aria-labelledby="project-contact-title"
        className="tw:border-t tw:border-[#d4cfc5] tw:px-5 tw:py-10 tw:sm:px-8 tw:sm:py-12 tw:lg:px-12"
      >
        <div className="tw:mx-auto tw:flex tw:max-w-[1200px] tw:flex-col tw:items-start tw:justify-between tw:gap-6 tw:md:flex-row tw:md:items-center tw:md:gap-8">
          <div className="tw:min-w-0">
            <h2
              id="project-contact-title"
              className="tw:m-0 tw:max-w-[22ch] tw:text-2xl tw:leading-tight tw:font-medium tw:tracking-[-0.025em] tw:text-balance tw:text-[#11110f] tw:sm:text-3xl"
            >
              {t("index.contactTitle")}
            </h2>
            <p className="tw:mt-3 tw:text-base tw:text-[#625c51]">
              {t("index.contactDescription")}
            </p>
          </div>
          <Link
            href={`/${locale}/contact`}
            className="tw:inline-flex tw:min-h-12 tw:shrink-0 tw:items-center tw:justify-center tw:gap-6 tw:bg-[#11110f] tw:px-6 tw:py-3 tw:text-sm tw:font-medium tw:text-[#faf8f4] tw:transition-colors tw:duration-200 tw:hover:bg-[#343128] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#11110f] tw:motion-reduce:transition-none"
          >
            {t("index.contactAction")}
            <PortfolioArrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
