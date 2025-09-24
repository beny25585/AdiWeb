import { services } from "@/data/services";
import styles from "@/styles/Services.module.css";
import type { Locale } from "@/types/routing";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const safeLocale: Locale =
    locale === "he" || locale === "en" || locale === "th"
      ? (locale as Locale)
      : "en";

  const title =
    safeLocale === "he"
      ? "השירותים שלנו"
      : safeLocale === "th"
      ? "บริการของเรา"
      : "Our Services";

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.key} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h2 className={styles.serviceTitle}>
              {safeLocale === "he"
                ? s.titleHE
                : safeLocale === "th"
                ? s.titleTH
                : s.titleEN}
            </h2>
            <p className={styles.desc}>
              {safeLocale === "he"
                ? s.descHE
                : safeLocale === "th"
                ? s.descTH
                : s.descEN}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
