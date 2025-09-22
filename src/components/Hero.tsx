"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{t("headline")}</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>{t("sub")}</p>
      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <a href="/projects" className="btn-primary">{t("projectsBtn")}</a>
        <a href="/contact" className="btn-secondary">{t("contactBtn")}</a>
      </div>
    </section>
  );
}
