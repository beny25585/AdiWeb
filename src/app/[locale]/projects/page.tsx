import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/lib/i18n";

export default async function ProjectsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "projects" });

  return (
    <section
      style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}
      >
        {t("pageTitle")}
      </h1>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.slug} locale={locale} project={p} />
        ))}
      </div>
    </section>
  );
}
