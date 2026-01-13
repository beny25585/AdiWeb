"use client";

import styles from "@/styles/ClientsAndCTA.module.css";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/utils/getImageUrl";

//    { id: "CD34_uwvm9j.png", titleKey: "clients.commercial" },

export default function ClientsAndCTA() {
  const t = useTranslations("finishing");
  const locale = useLocale();

  const rawClients = [
    { id: "V1_zxsgfj.png", titleKey: "clients.private" },
    { id: "8g_c309vg.png", titleKey: "clients.apartments" },
    { id: "u1eddk.webp", titleKey: "clients.institutions" },
    {
      id: "CD34_uwvm9j.png",
      titleKey: "clients.projects",
    },
  ];

  return (
    <div className={styles.clientsColumn}>
      {/* ---------- Grid ---------- */}
      <div className={styles.clientsSection}>
        <h3 className={styles.clientsTitle}>{t("clientsTitle")}</h3>

        <div className={styles.clientsGrid}>
          {rawClients.map((client, i) => (
            <div key={i} className={styles.clientCard}>
              <h4 className={styles.clientTitle}>{t(client.titleKey)}</h4>

              <Image
                src={getImageUrl(client.id)}
                alt={t(client.titleKey)}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                className={styles.clientImage}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ---------- CTA ---------- */}
      <div className={styles.cta}>
        <p className={styles.ctaText}>{t("ctaText")}</p>
        <Link href={`/${locale}/contact`} className={styles.ctaButton}>
          {t("ctaButton")}
        </Link>
      </div>
    </div>
  );
}
