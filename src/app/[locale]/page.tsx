import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import { useLocale } from "next-intl";
import type { Locale } from "@/lib/i18n";

export default function HomePage() {
  const locale = useLocale();
  return (
    <main>
      <Hero />
      <FeaturedProjects locale={locale as Locale} />
    </main>
  );
}
