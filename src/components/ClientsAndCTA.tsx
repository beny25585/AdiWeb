"use client";

import styles from "@/styles/ClientsAndCTA.module.css";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { cloudinaryUrl } from "@/utils/cloudinary";

export default function ClientsAndCTA() {
  const t = useTranslations("finishing");
  const locale = useLocale();

  const rawClients = [
    { id: "C25_AM_ifzwt0.png", titleKey: "clients.private" },
    { id: "G35_eadrzq.png", titleKey: "clients.apartments" },
    { id: "CD34_uwvm9j.png", titleKey: "clients.commercial" },
    { id: "G25_tmrpkj.png", titleKey: "clients.institutions" },
    {
      id: "18_okcx6e.jpg",
      titleKey: "clients.projects",
    },
  ];

  const clients = rawClients.map((c) => ({
    title: t(c.titleKey),
    image: cloudinaryUrl(c.id),
  }));

  return (
    <div className={styles.clientsColumn}>
      {/* ---------- Grid ---------- */}
      <div className={styles.clientsSection}>
        <h3 className={styles.clientsTitle}>{t("clientsTitle")}</h3>

        <div className={styles.clientsGrid}>
          {clients.map((client, i) => (
            <div key={i} className={styles.clientCard}>
              <h4 className={styles.clientTitle}>{client.title}</h4>

              <Image
                src={client.image}
                alt={client.title}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                className={styles.clientImage}
                priority={i === 0}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
