import { getRequestConfig } from 'next-intl/server';

export const locales = ['he', 'en', 'th'] as const;
export const defaultLocale = 'he';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? defaultLocale;

  return {
    locale: currentLocale,
    messages: (await import(`./src/messages/${currentLocale}.json`)).default
  };
});
