import { projectImages } from "@/data/projects";
import { getTranslations } from "next-intl/server";
import ProjectClient from "@/components/ProjectClient";
import type { Locale } from "@/lib/i18n";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale?: Locale; slug: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "en";
  const slug = resolvedParams.slug;
  const t = await getTranslations({ locale, namespace: "projects" });
  const dir = locale === "he" ? "rtl" : "ltr";
  const images = projectImages[slug as keyof typeof projectImages] || [];

  return (
    <ProjectClient
      dir={dir}
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      images={images}
    />
  );
}
