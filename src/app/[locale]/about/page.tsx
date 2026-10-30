import Image from "next/image";
import styles from "./about.module.css";
import { getTranslations } from "next-intl/server";
import { team } from "@/data/team";
import type { Locale } from "@/lib/i18n";
import { getImageUrl } from "@/utils/getImageUrl";

const serviceKeys = [
  "residential",
  "commercial",
  "hospitality",
  "carpentry",
  "finishes",
  "management",
] as const;

const processKeys = [
  "planning",
  "coordination",
  "costs",
  "supervision",
  "execution",
  "delivery",
] as const;

const qualityKeys = [
  "precision",
  "management",
  "materials",
  "delivery",
  "details",
] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <main className={styles.about}>
      <header className={styles.intro}>
        <h1 className={styles.pageTitle}>{t("title")}</h1>
        <p className={styles.pageSubtitle}>{t("subtitle")}</p>
      </header>

      <section className={styles.ceoSection} aria-labelledby="about-adi-title">
        <header className={styles.ceoHeading}>
          <h2 id="about-adi-title" className={styles.name}>{t("adiName")}</h2>
          <p className={styles.role}>{t("adiRole")}</p>
        </header>
        <div className={styles.ceoImage}>
          <Image
            src={getImageUrl("/Photos/adi-ceo-black&white.jpg")}
            alt={t("adiAlt")}
            width={1067}
            height={1600}
            sizes="(max-width: 800px) 280px, 320px"
          />
        </div>
        <p className={styles.bio}>{t("adiBio")}</p>
      </section>

      <section className={styles.company} aria-labelledby="about-company-title">
        <div className={styles.companyCopy}>
          <h2 id="about-company-title" className={styles.sectionTitle}>
            {t("company.title")}
          </h2>
          <p>{t("company.description")}</p>
        </div>
        <div>
          <h3 className={styles.listTitle}>{t("company.servicesTitle")}</h3>
          <ul className={styles.serviceList}>
            {serviceKeys.map((key) => (
              <li key={key}>{t("company.services." + key)}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className={styles.approachGrid}>
        <section aria-labelledby="about-process-title">
          <h2 id="about-process-title" className={styles.sectionTitle}>
            {t("process.title")}
          </h2>
          <ol className={styles.processList}>
            {processKeys.map((key) => (
              <li key={key}>{t("process.steps." + key)}</li>
            ))}
          </ol>
        </section>

        <section className={styles.quality} aria-labelledby="about-quality-title">
          <h2 id="about-quality-title" className={styles.sectionTitle}>
            {t("quality.title")}
          </h2>
          <p>{t("quality.description")}</p>
          <ul className={styles.qualityList}>
            {qualityKeys.map((key) => (
              <li key={key}>{t("quality.principles." + key)}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className={styles.teamSection} aria-labelledby="about-team-title">
        <h2 id="about-team-title" className={styles.sectionTitle}>
          {t("companyTitle")}
        </h2>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <article key={member.key} className={styles.person}>
              {member.key === "shira" ? (
                <>
                  <Image
                    src={getImageUrl(member.image)}
                    alt={t(member.key + "Alt")}
                    width={160}
                    height={160}
                    sizes="(max-width: 480px) 112px, 144px"
                  />
                  <h3>{t(member.key + "Name")}</h3>
                  <p className={styles.role}>{t(member.key + "Role")}</p>
                </>
              ) : (
                <>
                  <div className={styles.placeholderImage} aria-hidden="true" />
                  <p className={styles.role}>{t("roles." + member.key)}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.vision} aria-labelledby="about-vision-title">
        <h2 id="about-vision-title" className={styles.sectionTitle}>{t("visionTitle")}</h2>
        <p>{t("visionText")}</p>
      </section>
    </main>
  );
}
