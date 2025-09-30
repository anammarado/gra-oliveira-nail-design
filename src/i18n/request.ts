import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async (request: any) => {
  const pathname = request.nextUrl?.pathname || '/';
  const maybeLocale = pathname.split('/')[1];
  const supported = ['pt','en','fr','es'];
  const locale = supported.includes(maybeLocale) ? maybeLocale : 'pt';

  const messages = (await import(`@/locales/${locale}/common.json`)).default;

  return {
    locale,
    messages,
  };
});
