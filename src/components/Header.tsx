"use client";

import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { mainNavigation } from "@/data/navigation";
import SiteHeader from "./SiteHeader";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("header");
  const pathname = usePathname();
  const nav = mainNavigation.map((item) => ({
    href: `/${locale}${item.path}`,
    label: t(item.labelKey),
  }));
  const currentPath = pathname.replace(/\/+$/, "");

  return (
    <SiteHeader
      key={pathname}
      nav={nav}
      currentPath={currentPath}
      overHero={currentPath === `/${locale}`}
    />
  );
}
