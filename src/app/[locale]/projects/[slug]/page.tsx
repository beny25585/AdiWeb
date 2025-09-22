import { projects } from "@/data/projects";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export default async function ProjectCaseStudy({ params }: { params: { locale: Locale; slug: string } }) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h1 style={{ padding: "2rem" }}>{locale === "he" ? "הפרויקט לא נמצא" : locale === "th" ? "ไม่พบโครงการ" : "Project not found"}</h1>;
  }

  const title = locale === "he" ? project.titleHE : locale === "th" ? project.titleTH : project.titleEN;
  const desc =
    locale === "he" ? project.descriptionHE : locale === "th" ? project.descriptionTH : project.descriptionEN;

  return (
    <article style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>{title}</h1>
      {project.image && (
        <div style={{ marginBottom: "20px", borderRadius: "12px", overflow: "hidden" }}>
          <Image src={project.image} alt={title} width={900} height={500} style={{ objectFit: "cover" }} />
        </div>
      )}
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#444" }}>{desc}</p>
    </article>
  );
}
