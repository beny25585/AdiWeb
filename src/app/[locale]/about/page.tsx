import Image from "next/image";
import styles from "@/styles/about.module.css";
import { getTranslations } from "next-intl/server";
import { team } from "@/data/team";
import type { Locale } from "@/lib/i18n";

export default async function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <section className={styles.about}>
      {/* Page Title */}
      <h1 className={styles.pageTitle}>{t("title")}</h1>
      <p className={styles.pageSubtitle}>{t("subtitle")}</p>

      {/* CEO Section */}
      <div className={styles.ceoSection}>
        <div className={styles.ceoInfo}>
          <h2 className={styles.name}>{t("adiName")}</h2>
          <p className={styles.role}>{t("adiRole")}</p>
          <p className={styles.bio}>{t("adiBio")}</p>
        </div>
        <div className={styles.ceoImage}>
          <Image
            src="/Photos/adi-ceo-black&white.jpg"
            alt={t("adiAlt")}
            width={450}
            height={450}
          />
        </div>
      </div>

      {/* Team Section */}
      <h2 className={styles.sectionTitle}>{t("companyTitle")}</h2>
      <div className={styles.teamGrid}>
        {team.map((member) => (
          <div
            key={member.key}
            className={`${styles.person} ${
              member.key === "shira" ? styles.center : styles.side
            }`}
          >
            {member.key === "shira" ? (
              <>
                <Image
                  src={member.image}
                  alt={t(`${member.key}Alt`)}
                  width={member.key === "shira" ? 220 : 160}
                  height={member.key === "shira" ? 220 : 160}
                />
                <h3>{t(`${member.key}Name`)}</h3>
                <p className={styles.role}>{t(`${member.key}Role`)}</p>
              </>
            ) : (
              <>
                <div className={styles.placeholderImage}></div>
                <p className={styles.role}>{t(`roles.${member.key}`)}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Vision Section */}
      <div className={styles.vision}>
        <h2>{t("visionTitle")}</h2>
        <p>{t("visionText")}</p>
      </div>
    </section>
  );
}
