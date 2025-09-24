import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Locale } from "@/types/routing"; // אם יש לך טיפוס מוגדר

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const safeLocale: Locale =
    locale === "he" || locale === "en" || locale === "th" ? (locale as Locale) : "en";

  const featured = projects.slice(0, 3);

  return (
    <main>
      <Hero />

      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "20px" }}>
          {safeLocale === "he"
            ? "פרויקטים נבחרים"
            : safeLocale === "th"
            ? "ผลงานเด่น"
            : "Featured Projects"}
        </h2>
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {featured.map((p) => (
            <ProjectCard key={p.slug} locale={safeLocale} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
