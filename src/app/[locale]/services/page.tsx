import { services } from "@/data/services";
import styles from "@/styles/Services.module.css";
import { getTranslations } from "next-intl/server";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{t("title")}</h1>

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.key} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h2 className={styles.serviceTitle}>{t(`${s.key}.title`)}</h2>
            <p className={styles.desc}>{t(`${s.key}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
