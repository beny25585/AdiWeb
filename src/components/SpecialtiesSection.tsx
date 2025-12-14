"use client";

import styles from "@/styles/SpecialtiesSection.module.css";
import { useTranslations } from "next-intl";
import {
  FaTools,
  FaPaintRoller,
  FaDoorOpen,
  FaCouch,
  FaBolt,
  FaHammer,
} from "react-icons/fa";

export default function SpecialtiesSection() {
  const t = useTranslations("finishing");

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

  return (
    <div className={styles.specialtiesColumn}>
      <h2 className={styles.title}>{t("title")}</h2>

      <div className={styles.specialtiesGrid}>
        {specialties.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>{item.icon} </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
            <p className={styles.cardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
