import Hero from "@/components/Hero";

import type { Locale } from "@/types/routing";
import { getTranslations } from "next-intl/server";
import FeaturedProjects from "@/components/FeaturedProjects";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const safeLocale: Locale =
    locale === "he" || locale === "en" || locale === "th"
      ? (locale as Locale)
      : "en";

  const t = await getTranslations({ locale: safeLocale, namespace: "home" });

  return (
    <main>
      <Hero />
      <FeaturedProjects locale={safeLocale} />
     
    </main>
  );
}
