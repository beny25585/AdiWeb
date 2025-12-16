import { getTranslations } from "next-intl/server";
import styles from "@/styles/Privacy.module.css";
import type { Locale } from "@/lib/i18n";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  const sections = t.raw("sections");

  return (
    <section className={styles.privacy}>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.lastUpdated}>{t("lastUpdated")}</p>
      <p className={styles.intro}>{t("intro")}</p>

      <article className={styles.content}>
        {(
          Object.values(sections) as { title: string; content: string[] }[]
        ).map((section, index) => (
          <div key={index} className={styles.section}>
            <h2>{section.title}</h2>
            {section.content.map((line: string, i: number) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </article>
    </section>
  );
}
