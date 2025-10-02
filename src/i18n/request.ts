import { getRequestConfig } from 'next-intl/server';

// The getRequestConfig handler receives a platform-specific request object.
// Use `any` here and disable the explicit-any rule for this line because Next.js/next-intl
// provide different request shapes depending on runtime. This keeps behavior simple
// and avoids brittle type assumptions.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default getRequestConfig(async (request: any) => {
  const pathname = request.nextUrl?.pathname || (typeof request.url === 'string' ? new URL(request.url, 'http://localhost').pathname : '/');
  const maybeLocale = pathname.split('/')[1];
  const supported = ['pt','en','fr','es'];
  const locale = supported.includes(maybeLocale) ? maybeLocale : 'pt';

  const messages = (await import(`@/locales/${locale}/common.json`)).default;

  return {
    locale,
    messages,
  };
});
