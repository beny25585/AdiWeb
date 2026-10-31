"use client";

import { useTranslations, useLocale } from "next-intl";
import { FiPhone, FiMail, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useId } from "react";
import { initFacebookPixel } from "@/lib/facebookPixel";
import CompanyDetails from "@/components/CompanyDetails";
import "@/styles/tailwind.css";

const inputFields = [
  { name: "name", type: "text", autoComplete: "name", required: true },
  { name: "email", type: "email", autoComplete: "email", required: true },
  { name: "phone", type: "tel", autoComplete: "tel", required: false },
] as const;

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const formId = useId();
  const [state, handleSubmit] = useForm("xeorbbnr");

  useEffect(() => {
    if (state.succeeded) {
      initFacebookPixel("827790063665854");
      const facebookWindow = window as Window & {
        fbq?: (command: "track", event: "Lead") => void;
      };
      facebookWindow.fbq?.("track", "Lead");
    }
  }, [state.succeeded]);

  const phone = t("phone");
  const email = t("email");
  const contactMethods = [
    {
      label: t("whatsappLabel"),
      value: t("WhatsApp"),
      href: `https://wa.me/${t("WhatsApp").replace(/[\s+-]/g, "")}`,
      icon: FaWhatsapp,
      external: true,
    },
    {
      label: t("phoneLabel"),
      value: phone,
      href: `tel:${phone}`,
      icon: FiPhone,
      external: false,
    },
    {
      label: t("emailLabel"),
      value: email,
      href: `mailto:${email}`,
      icon: FiMail,
      external: false,
    },
  ];
  const hasFormError = (state.errors?.getFormErrors().length ?? 0) > 0;
  const hasMessageError = (state.errors?.getFieldErrors("message").length ?? 0) > 0;
  const hasPrivacyError = (state.errors?.getFieldErrors("privacy").length ?? 0) > 0;

  return (
    <main className="tw:w-full tw:bg-[#faf8f4] tw:text-[#11110f] tw:selection:bg-[#e0c89f] tw:selection:text-[#11110f]">
      <div className="tw:mx-auto tw:w-full tw:max-w-[1200px] tw:px-5 tw:py-10 tw:sm:px-8 tw:sm:py-12 tw:lg:px-12 tw:lg:py-14">
        <header className="tw:mb-8 tw:border-0 tw:border-b tw:border-solid tw:border-[#d4cfc5] tw:pb-8 tw:text-start tw:sm:mb-10">
          <h1 className="tw:m-0 tw:max-w-[24ch] tw:text-[clamp(2rem,3.5vw,3rem)] tw:leading-tight tw:font-medium tw:tracking-[-0.025em] tw:text-balance tw:text-[#11110f] tw:rtl:tracking-normal">
            {t("title")}
          </h1>
          <p className="tw:mt-4 tw:mb-0 tw:max-w-[65ch] tw:text-base tw:leading-relaxed tw:text-pretty tw:text-[#625c51]">
            {t("subtitle")}
          </p>
        </header>

        <div className="tw:grid tw:items-start tw:gap-10 tw:lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] tw:lg:gap-16">
          <section aria-labelledby={`${formId}-details-title`} className="tw:min-w-0 tw:text-start">
            <h2 id={`${formId}-details-title`} className="tw:m-0 tw:text-xl tw:leading-7 tw:font-medium tw:text-[#11110f]">
              {t("detailsTitle")}
            </h2>
            <ul role="list" className="tw:mt-5 tw:mb-0 tw:list-none tw:p-0">
              {contactMethods.map(({ label, value, href, icon: Icon, external }) => (
                <li key={href} className="tw:border-0 tw:border-b tw:border-solid tw:border-[#d4cfc5]">
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="tw:group tw:flex tw:min-h-16 tw:items-center tw:gap-4 tw:py-4 tw:text-[#11110f] tw:no-underline tw:transition-colors tw:hover:text-[#75603b] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#75603b] tw:motion-reduce:transition-none"
                  >
                    <Icon aria-hidden="true" className="tw:size-5 tw:shrink-0 tw:text-[#75603b]" />
                    <span className="tw:flex tw:min-w-0 tw:flex-col tw:gap-1">
                      <span className="tw:text-sm tw:leading-6 tw:text-[#625c51]">{label}</span>
                      <bdi dir="ltr" className="tw:break-words tw:text-base tw:leading-6 tw:group-hover:underline tw:group-hover:underline-offset-4">{value}</bdi>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="tw:mt-7">
              <CompanyDetails />
            </div>
          </section>

          <form
            aria-labelledby={`${formId}-form-title`}
            aria-busy={state.submitting}
            onSubmit={handleSubmit}
            className="tw:min-w-0 tw:text-start"
          >
            <h2 id={`${formId}-form-title`} className="tw:mb-6 tw:text-xl tw:leading-7 tw:font-medium tw:text-[#11110f]">
              {t("formTitle")}
            </h2>

            {state.succeeded && (
              <div role="status" aria-live="polite" aria-atomic="true" className="tw:mb-6 tw:border-0 tw:border-y tw:border-solid tw:border-[#c6ad80] tw:py-5">
                <FiCheckCircle aria-hidden="true" className="tw:mb-3 tw:size-6 tw:text-[#75603b]" />
                <h3 className="tw:m-0 tw:text-lg tw:leading-7 tw:font-medium tw:text-[#11110f]">{t("formSuccess")}</h3>
                <p className="tw:mt-2 tw:mb-0 tw:text-base tw:leading-relaxed tw:text-[#625c51]">{t("formSuccessDesc")}</p>
              </div>
            )}

            {hasFormError && (
              <p role="alert" className="tw:mb-6 tw:text-base tw:leading-relaxed tw:text-[#9b2c2c]">{t("formError")}</p>
            )}

            <div className="tw:grid tw:gap-5">
              {inputFields.map((field) => {
                const fieldId = `${formId}-${field.name}`;
                const hasError = (state.errors?.getFieldErrors(field.name).length ?? 0) > 0;

                return (
                  <div key={field.name} className="tw:min-w-0">
                    <label htmlFor={fieldId} className="tw:mb-2 tw:block tw:text-sm tw:leading-6 tw:font-medium tw:text-[#11110f]">
                      {t(`form.${field.name}`)}
                    </label>
                    <input
                      id={fieldId}
                      type={field.type}
                      name={field.name}
                      autoComplete={field.autoComplete}
                      required={field.required}
                      dir={field.name === "name" ? "auto" : "ltr"}
                      aria-invalid={hasError || undefined}
                      aria-describedby={hasError ? `${fieldId}-error` : undefined}
                      className="tw:block tw:min-h-12 tw:w-full tw:min-w-0 tw:rounded-none tw:border tw:border-solid tw:border-[#8f8779] tw:bg-white tw:px-3 tw:py-3 tw:font-[inherit] tw:text-base tw:leading-6 tw:text-[#11110f] tw:caret-[#75603b] tw:transition-colors tw:focus:border-[#75603b] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-[#75603b] tw:aria-invalid:border-[#9b2c2c] tw:motion-reduce:transition-none"
                    />
                    <ValidationError
                      id={`${fieldId}-error`}
                      prefix={t(`form.${field.name}`)}
                      field={field.name}
                      errors={state.errors}
                      role="alert"
                      className="tw:mt-2 tw:text-sm tw:leading-6 tw:text-[#9b2c2c]"
                    />
                  </div>
                );
              })}

              <div className="tw:min-w-0">
                <label htmlFor={`${formId}-message`} className="tw:mb-2 tw:block tw:text-sm tw:leading-6 tw:font-medium tw:text-[#11110f]">
                  {t("form.message")}
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={5}
                  dir="auto"
                  aria-invalid={hasMessageError || undefined}
                  aria-describedby={hasMessageError ? `${formId}-message-error` : undefined}
                  className="tw:block tw:min-h-36 tw:w-full tw:min-w-0 tw:resize-y tw:rounded-none tw:border tw:border-solid tw:border-[#8f8779] tw:bg-white tw:px-3 tw:py-3 tw:font-[inherit] tw:text-base tw:leading-6 tw:text-[#11110f] tw:caret-[#75603b] tw:transition-colors tw:focus:border-[#75603b] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-[#75603b] tw:aria-invalid:border-[#9b2c2c] tw:motion-reduce:transition-none"
                />
                <ValidationError
                  id={`${formId}-message-error`}
                  prefix={t("form.message")}
                  field="message"
                  errors={state.errors}
                  role="alert"
                  className="tw:mt-2 tw:text-sm tw:leading-6 tw:text-[#9b2c2c]"
                />
              </div>

              <div>
                <div className="tw:flex tw:items-start tw:gap-3">
                  <input
                    type="checkbox"
                    id={`${formId}-privacy`}
                    name="privacy"
                    required
                    aria-invalid={hasPrivacyError || undefined}
                    aria-describedby={hasPrivacyError ? `${formId}-privacy-error` : undefined}
                    className="tw:mt-3 tw:size-5 tw:shrink-0 tw:cursor-pointer tw:accent-[#11110f] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#75603b]"
                  />
                  <label
                    htmlFor={`${formId}-privacy`}
                    className="tw:min-h-11 tw:flex-1 tw:cursor-pointer tw:py-2.5 tw:text-sm tw:leading-6 tw:text-[#625c51]"
                    dangerouslySetInnerHTML={{
                      __html: t("privacyNote", {
                        privacyPolicyLink: `<a href="/${locale}/privacy" target="_blank" rel="noopener noreferrer" class="tw:text-[#11110f] tw:underline tw:underline-offset-4 tw:hover:text-[#75603b] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#75603b]">${t("privacyPolicy")}</a>`,
                      }),
                    }}
                  />
                </div>
                <ValidationError
                  id={`${formId}-privacy-error`}
                  prefix={t("privacyPolicy")}
                  field="privacy"
                  errors={state.errors}
                  role="alert"
                  className="tw:mt-2 tw:text-sm tw:leading-6 tw:text-[#9b2c2c]"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="tw:inline-flex tw:min-h-12 tw:w-full tw:cursor-pointer tw:items-center tw:justify-center tw:rounded-none tw:border tw:border-solid tw:border-[#11110f] tw:bg-[#11110f] tw:px-6 tw:py-3 tw:font-[inherit] tw:text-base tw:leading-6 tw:font-medium tw:text-[#faf8f4] tw:transition-colors tw:hover:bg-[#343128] tw:focus-visible:outline-2 tw:focus-visible:outline-offset-4 tw:focus-visible:outline-[#75603b] tw:disabled:cursor-wait tw:disabled:border-[#625c51] tw:disabled:bg-[#625c51] tw:motion-reduce:transition-none tw:sm:w-fit"
              >
                {state.submitting ? t("sending") : t("form.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
