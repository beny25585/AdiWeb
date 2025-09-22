import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;

  const featured = projects.slice(0, 3); 

  return (
    <>
      <Hero />
      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            {locale === "he" ? "פרויקטים נבחרים" : locale === "th" ? "ผลงานเด่น" : "Featured Projects"}
          </h2>
          <a href={`/${locale}/projects`} style={{ color: "#0b3a82", textDecoration: "underline" }}>
            {locale === "he" ? "לכל הפרויקטים" : locale === "th" ? "ดูทั้งหมด" : "All Projects"}
          </a>
        </div>
        <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {featured.map((p) => (
            <ProjectCard key={p.slug} locale={locale} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
