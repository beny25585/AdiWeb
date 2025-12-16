import { getRequestConfig } from 'next-intl/server';

export const locales = ['he', 'en', 'th'] as const;
export const defaultLocale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./src/messages/${locale}.json`)).default
  };
});
