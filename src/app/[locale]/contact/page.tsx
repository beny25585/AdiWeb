"use client";

import styles from "@/styles/contact.module.css";
import { useTranslations, useLocale } from "next-intl";
import { FiPhone, FiMail, FiGlobe, FiCheckCircle } from "react-icons/fi";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();

  // 🔥 Formspree Hook
  const [state, handleSubmit] = useForm("xeorbbnr");

  const phone = t("phone");
  const email = t("email");
  const site = t("site");

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.subtitle}>{t("subtitle")}</p>

      <div className={styles.formSection}>
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

        <form className={styles.form} onSubmit={handleSubmit}>
          {state.succeeded && (
            <div className={styles.successMessage}>
              <FiCheckCircle className={styles.successIcon} />
              <h3>{t("formSuccess")}</h3>
              <p>{t("formSuccessDesc")}</p>
            </div>
          )}

          <input
            type="text"
            name="name"
            placeholder={t("form.name")}
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            type="email"
            name="email"
            placeholder={t("form.email")}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input type="tel" name="phone" placeholder={t("form.phone")} />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          <textarea name="message" placeholder={t("form.message")} rows={5} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <div className={styles.privacyNote}>
            <input type="checkbox" id="privacy" name="privacy" required />
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

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? t("sending") : t("form.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
