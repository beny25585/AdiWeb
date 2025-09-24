import { projects } from "@/data/projects";
import Image from "next/image";
import type { Locale } from "@/types/routing";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const safeLocale: Locale =
    locale === "he" || locale === "en" || locale === "th" ? (locale as Locale) : "en";

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <h1 style={{ padding: "2rem" }}>
        {safeLocale === "he"
          ? "הפרויקט לא נמצא"
          : safeLocale === "th"
          ? "ไม่พบโครงการ"
          : "Project not found"}
      </h1>
    );
  }

  const title =
    safeLocale === "he"
      ? project.titleHE
      : safeLocale === "th"
      ? project.titleTH
      : project.titleEN;

  const desc =
    safeLocale === "he"
      ? project.descriptionHE
      : safeLocale === "th"
      ? project.descriptionTH
      : project.descriptionEN;

  return (
    <article style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>{title}</h1>
      {project.image && (
        <div style={{ marginBottom: "20px", borderRadius: "12px", overflow: "hidden" }}>
          <Image
            src={project.image}
            alt={title}
            width={900}
            height={500}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#444" }}>{desc}</p>
    </article>
  );
}
