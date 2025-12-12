"use client";

import styles from "@/styles/FinishingExpertise.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  FaTools,
  FaPaintRoller,
  FaDoorOpen,
  FaCouch,
  FaBolt,
  FaHammer,
} from "react-icons/fa";
import {
  MdBusiness,
  MdHome,
  MdStore,
  MdSchool,
  MdApartment,
} from "react-icons/md";

export default function FinishingExpertise() {
  const t = useTranslations("finishing");
  const locale = useLocale();

  const specialties = [
    {
      icon: <FaTools />,
      title: t("specialties.gypsum.title"),
      desc: t("specialties.gypsum.desc"),
    },
    {
      icon: <FaPaintRoller />,
      title: t("specialties.flooring.title"),
      desc: t("specialties.flooring.desc"),
    },
    {
      icon: <FaDoorOpen />,
      title: t("specialties.doors.title"),
      desc: t("specialties.doors.desc"),
    },
    {
      icon: <FaCouch />,
      title: t("specialties.carpentry.title"),
      desc: t("specialties.carpentry.desc"),
    },
    {
      icon: <FaBolt />,
      title: t("specialties.electrical.title"),
      desc: t("specialties.electrical.desc"),
    },
    {
      icon: <FaHammer />,
      title: t("specialties.renovation.title"),
      desc: t("specialties.renovation.desc"),
    },
  ];

  const clients = [
    { icon: <MdHome />, text: t("clients.private") },
    { icon: <MdApartment />, text: t("clients.apartments") },
    { icon: <MdStore />, text: t("clients.commercial") },
    { icon: <MdSchool />, text: t("clients.institutions") },
    { icon: <MdBusiness />, text: t("clients.projects") },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </div>

        {/* Specialties Grid */}
        <div className={styles.specialtiesGrid}>
          {specialties.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

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
    </section>
  );
}
