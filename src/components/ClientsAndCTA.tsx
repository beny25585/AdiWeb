"use client";

import styles from "@/styles/ClientsAndCTA.module.css";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import {
  MdBusiness,
  MdHome,
  MdStore,
  MdSchool,
  MdApartment,
} from "react-icons/md";

export default function ClientsAndCTA() {
  const t = useTranslations("finishing");
  const locale = useLocale();

  const clients = [
    { icon: <MdHome />, text: t("clients.private") },
    { icon: <MdApartment />, text: t("clients.apartments") },
    { icon: <MdStore />, text: t("clients.commercial") },
    { icon: <MdSchool />, text: t("clients.institutions") },
    { icon: <MdBusiness />, text: t("clients.projects") },
  ];

  return (
    <div className={styles.clientsColumn}>
      {/* Clients Section */}
      <div className={styles.clientsSection}>
        <h3 className={styles.clientsTitle}>{t("clientsTitle")}</h3>
        <div className={styles.clientsGrid}>
          {clients.map((client, index) => (
            <div key={index} className={styles.clientCard}>
              <div className={styles.clientIcon}>{client.icon}</div>
              <p className={styles.clientText}>{client.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <p className={styles.ctaText}>{t("ctaText")}</p>
        <Link href={`/${locale}/contact`} className={styles.ctaButton}>
          {t("ctaButton")}
        </Link>
      </div>
    </div>
  );
}
