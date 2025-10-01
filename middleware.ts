import createMiddleware from 'next-intl/middleware';
import config from './next-intl.config.js';

export default createMiddleware(config);

export const configMatcher = {
  matcher: ['/', '/(pt|en|fr|es)/:path*']
};