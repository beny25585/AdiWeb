import { redirect } from "next/navigation";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

export default async function RemovedInsulationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const targetLocale = locales.includes(locale as Locale) ? locale : defaultLocale;

  redirect(`/${targetLocale}`);
}
