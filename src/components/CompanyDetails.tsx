import { useTranslations } from "next-intl";
import { company } from "@/lib/company";
import "@/styles/tailwind.css";

type CompanyDetailsProps = {
  variant?: "default" | "footer";
};

export default function CompanyDetails({ variant = "default" }: CompanyDetailsProps) {
  const t = useTranslations("companyDetails");
  const isFooter = variant === "footer";

  return (
    <address
      dir="ltr"
      className={`tw:text-left tw:text-sm tw:leading-[1.8] tw:not-italic tw:[overflow-wrap:anywhere] ${isFooter ? "tw:text-[#b5b3ac]" : "tw:text-inherit"}`}
    >
      <strong lang="en" className={isFooter ? "tw:font-medium tw:text-[#f5f2eb]" : "tw:font-bold"}>
        {company.name}
      </strong>
      <p className={isFooter ? "tw:mt-1 tw:text-sm tw:leading-[1.8] tw:text-inherit" : "tw:mt-1 tw:text-inherit"}>
        <bdi>{t("registrationLabel")}</bdi> <bdi>{company.registration}</bdi>
      </p>
      <p lang="en" className={isFooter ? "tw:mt-1 tw:text-sm tw:leading-[1.8] tw:text-inherit" : "tw:mt-1 tw:text-inherit"}>
        {company.address}
      </p>
      <p className={isFooter ? "tw:mt-1 tw:text-sm tw:leading-[1.8] tw:text-inherit" : "tw:mt-1 tw:text-inherit"}>
        <bdi>{t("phoneLabel")}</bdi>{" "}
        <a
          href="tel:+66658878829"
          className={`tw:text-inherit tw:underline tw:underline-offset-[3px] tw:transition-colors tw:duration-200 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#c6ad80] tw:motion-reduce:transition-none ${isFooter ? "tw:inline-flex tw:min-h-11 tw:max-w-full tw:items-center tw:hover:text-[#e0c89f]" : "tw:inline tw:hover:text-[#8d6935]"}`}
        >
          {company.phone}
        </a>
      </p>
      <p className={isFooter ? "tw:mt-1 tw:text-sm tw:leading-[1.8] tw:text-inherit" : "tw:mt-1 tw:text-inherit"}>
        <bdi>{t("emailLabel")}</bdi>{" "}
        <a
          href={`mailto:${company.email}`}
          className={`tw:text-inherit tw:underline tw:underline-offset-[3px] tw:transition-colors tw:duration-200 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#c6ad80] tw:motion-reduce:transition-none ${isFooter ? "tw:inline-flex tw:min-h-11 tw:max-w-full tw:items-center tw:hover:text-[#e0c89f]" : "tw:inline tw:hover:text-[#8d6935]"}`}
        >
          {company.email}
        </a>
      </p>
    </address>
  );
}
