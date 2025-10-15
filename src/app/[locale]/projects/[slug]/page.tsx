import { projectImages } from "@/data/projectImages";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/lib/i18n";
import ProjectClient from "@/components/ProjectClient";

export default async function ProjectPage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const { locale, slug } = params;
  const t = await getTranslations({ locale, namespace: "projects" });
  const dir = locale === "he" ? "rtl" : "ltr";
  const images = projectImages[slug] || [];

  return (
    <ProjectClient
      dir={dir}
      title={t(`${slug}.title`)}
      description={t(`${slug}.description`)}
      images={images}
    />
  );
}
