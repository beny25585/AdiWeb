import { getRequestConfig } from 'next-intl/server';

export const locales = ['he', 'en', 'th'] as const;
export type Locale = typeof locales[number];
export const defaultLocale = 'he';

export function dir(locale: string) {
  return locale === 'he' ? 'rtl' : 'ltr';
}

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? defaultLocale;
  

  return {
    locale: currentLocale,
    messages: (await import(`@/messages/${currentLocale}.json`)).default
  };
});
