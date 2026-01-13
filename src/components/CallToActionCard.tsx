import Link from "next/link";
import styles from "@/styles/CallToAction.module.css";
import { useTranslations, useLocale } from "next-intl";

export default function CallToAction() {
  const t = useTranslations("finishing");
  const locale = useLocale();
  return (
    <div className={styles.cta}>
      <p className={styles.ctaText}>{t("ctaText")}</p>
      <Link href={`/${locale}/contact`} className={styles.ctaButton}>
        {t("ctaButton")}
      </Link>
    </div>
  );
}
