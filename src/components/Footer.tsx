"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import CompanyDetails from "@/components/CompanyDetails";
import { company } from "@/lib/company";
import { mainNavigation } from "@/data/navigation";
import BrandMark from "./BrandMark";
import {
  FaFacebook,
  FaWhatsapp,
  FaLine,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import "@/styles/tailwind.css";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");
  const th = useTranslations("header");
  const whatsappHref = `https://wa.me/${t("WhatsApp").replace(/[\s+-]/g, "")}`;

  return (
    <footer
      dir={locale === "he" ? "rtl" : "ltr"}
      className="tw:border-0 tw:border-t tw:border-solid tw:border-white/10 tw:bg-[#11110f] tw:text-[#f5f2eb]"
    >
      <div className="tw:mx-auto tw:w-full tw:max-w-[1440px] tw:px-5 tw:sm:px-8 tw:lg:px-12">
        <div className="tw:grid tw:grid-cols-1 tw:gap-x-10 tw:gap-y-12 tw:py-14 tw:sm:grid-cols-2 tw:sm:py-16 tw:lg:grid-cols-4 tw:lg:gap-x-8 tw:xl:gap-x-12">
          <div className="tw:min-w-0">
            <Link
              href={`/${locale}`}
              aria-label={th("brandLabel")}
              className="tw:mb-6 tw:inline-flex tw:min-h-16 tw:items-center tw:gap-2 tw:no-underline tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f]"
            >
              <BrandMark />
            </Link>
            <CompanyDetails variant="footer" />
          </div>

          <nav aria-label={t("linksTitle")} className="tw:min-w-0">
            <h2 className="tw:mb-5 tw:text-base tw:leading-6 tw:font-medium tw:text-[#f5f2eb]">
              {t("linksTitle")}
            </h2>
            <ul role="list" className="tw:m-0 tw:flex tw:list-none tw:flex-col tw:p-0">
              {mainNavigation.map((item) => (
                <li key={item.path}>
                  <Link
                    href={`/${locale}${item.path}`}
                    className="tw:inline-flex tw:min-h-11 tw:min-w-11 tw:items-center tw:py-2 tw:text-sm tw:leading-6 tw:font-normal tw:text-[#c3c0b8] tw:no-underline tw:transition-colors tw:duration-200 tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
                  >
                    {th(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="tw:min-w-0">
            <h2 className="tw:mb-5 tw:text-base tw:leading-6 tw:font-medium tw:text-[#f5f2eb]">
              {t("companyTitle")}
            </h2>
            <div className="tw:flex tw:flex-col">
              <a
                href={t("address.mapLink")}
                target="_blank"
                rel="noopener noreferrer"
                className="tw:flex tw:min-h-11 tw:items-center tw:gap-3 tw:py-2 tw:text-sm tw:leading-6 tw:text-[#c3c0b8] tw:no-underline tw:transition-colors tw:duration-200 tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
              >
                <FaMapMarkerAlt aria-hidden="true" className="tw:size-4 tw:shrink-0 tw:text-[#c6ad80]" />
                <span>{t("address.mapLabel")}</span>
              </a>
              <a
                href={`tel:${t("phone").replace(/[\s-]/g, "")}`}
                className="tw:flex tw:min-h-11 tw:items-center tw:gap-3 tw:py-2 tw:text-sm tw:leading-6 tw:text-[#c3c0b8] tw:no-underline tw:transition-colors tw:duration-200 tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
              >
                <FaPhone aria-hidden="true" className="tw:size-4 tw:shrink-0 tw:text-[#c6ad80]" />
                <span dir="ltr">{t("phone")}</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="tw:flex tw:min-h-11 tw:items-center tw:gap-3 tw:py-2 tw:text-sm tw:leading-6 tw:text-[#c3c0b8] tw:no-underline tw:transition-colors tw:duration-200 tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
              >
                <FaWhatsapp aria-hidden="true" className="tw:size-4 tw:shrink-0 tw:text-[#c6ad80]" />
                <span dir="ltr">{t("WhatsApp")}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="tw:flex tw:min-h-11 tw:items-center tw:gap-3 tw:py-2 tw:text-sm tw:leading-6 tw:text-[#c3c0b8] tw:no-underline tw:transition-colors tw:duration-200 tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
              >
                <FaEnvelope aria-hidden="true" className="tw:size-4 tw:shrink-0 tw:text-[#c6ad80]" />
                <span dir="ltr" className="tw:min-w-0 tw:[overflow-wrap:anywhere]">{company.email}</span>
              </a>
            </div>
          </div>

          <div className="tw:min-w-0">
            <h2 className="tw:mb-5 tw:text-base tw:leading-6 tw:font-medium tw:text-[#f5f2eb]">
              {t("socialTitle")}
            </h2>
            <ul role="list" className="tw:m-0 tw:flex tw:list-none tw:flex-col tw:p-0">
              {[
                { key: "whatsapp", href: whatsappHref, Icon: FaWhatsapp },
                {
                  key: "instagram",
                  href: "https://www.instagram.com/uzan_groups?fbclid=IwY2xjawO5yhtleHRuA2FlbQIxMABicmlkETF1QVF2M20zM3doOGxnY2p0c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHowMaSqeX-Gw5nPtAdCZfXkzb8BnBpyPIDWnIma0GwVza6sCSfaQ4P_7qVx1_aem_iyqaC_yM4me8fx63Yo6svw",
                  Icon: FaInstagram,
                },
                { key: "line", href: "https://line.me/ti/p/F6ExtLjmb_", Icon: FaLine },
                {
                  key: "facebook",
                  href: "https://www.facebook.com/profile.php?id=61584594541314",
                  Icon: FaFacebook,
                },
                {
                  key: "linkedin",
                  href: "https://www.linkedin.com/in/uzan-group-b262ab3a2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  Icon: FaLinkedin,
                },
                {
                  key: "tiktok",
                  href: "https://www.tiktok.com/@uzangroups?_r=1&_t=ZS-92yxgGRu3nx",
                  Icon: FaTiktok,
                },
              ].map(({ key, href, Icon }) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw:inline-flex tw:min-h-11 tw:items-center tw:gap-3 tw:py-2 tw:text-sm tw:leading-6 tw:text-[#c3c0b8] tw:no-underline tw:transition-colors tw:duration-200 tw:hover:text-[#e0c89f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#e0c89f] tw:motion-reduce:transition-none"
                  >
                    <Icon aria-hidden="true" className="tw:size-4 tw:shrink-0 tw:text-[#c6ad80]" />
                    {t(`socials.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tw:border-0 tw:border-t tw:border-solid tw:border-white/15 tw:py-6 tw:text-start tw:text-xs tw:leading-6 tw:text-[#a7a49d]">
          {t("rights")}
        </div>
      </div>
    </footer>
  );
}
