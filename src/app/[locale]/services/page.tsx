import type { Locale } from "@/lib/i18n";
import { services } from "@/data/services";
import styles from "@/styles/Services.module.css";

export default async function ServicesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = await params;

  const title =
    locale === "he"
      ? "השירותים שלנו"
      : locale === "th"
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
              {locale === "he" ? s.titleHE : locale === "th" ? s.titleTH : s.titleEN}
            </h2>
            <p className={styles.desc}>
              {locale === "he" ? s.descHE : locale === "th" ? s.descTH : s.descEN}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
