"use client";

import styles from "@/styles/contact.module.css";
import { useTranslations, useLocale } from "next-intl";
import { FiPhone, FiMail, FiGlobe } from "react-icons/fi";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();

  const phone = t("phone");
  const email = t("email");
  const site = t("site");

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.subtitle}>{t("subtitle")}</p>

      <div className={styles.formSection}>
        {/* ==== צד שמאל - פרטי קשר ==== */}
        <div className={styles.infoSide}>
          <div className={styles.contactCard}>
            <FiPhone className={styles.icon} />
            <div>
              <h3>{t("phoneLabel")}</h3>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <FiMail className={styles.icon} />
            <div>
              <h3>{t("emailLabel")}</h3>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <FiGlobe className={styles.icon} />
            <div>
              <h3>{t("siteLabel")}</h3>
              <a
                href={`https://${site}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site}
              </a>
            </div>
          </div>
        </div>

        {/* ==== צד ימין - טופס ==== */}
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            alert(t("formSuccess"));
          }}
        >
          <input type="text" placeholder={t("form.name")} required />
          <input type="email" placeholder={t("form.email")} required />
          <input type="tel" placeholder={t("form.phone")} />
          <textarea placeholder={t("form.message")} rows={5}></textarea>

          <div className={styles.privacyNote}>
            <input type="checkbox" id="privacy" required />
            <label
              htmlFor="privacy"
              dangerouslySetInnerHTML={{
                __html: t("privacyNote", {
                  privacyPolicyLink: `<a href="/${locale}/privacy" target="_blank" class="${
                    styles.link
                  }">
                    ${t("privacyPolicy")}
                  </a>`,
                }),
              }}
            />
          </div>

          <button type="submit">{t("form.submit")}</button>
        </form>
      </div>
    </section>
  );
}
