import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import type { Locale } from "@/types/routing";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const safeLocale: Locale =
    locale === "he" || locale === "en" || locale === "th" ? (locale as Locale) : "en";

  return (
    <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        {safeLocale === "he"
          ? "הפרויקטים שלנו"
          : safeLocale === "th"
          ? "โครงการของเรา"
          : "Our Projects"}
      </h1>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.slug} locale={safeLocale} project={p} />
        ))}
      </div>
    </section>
  );
}
