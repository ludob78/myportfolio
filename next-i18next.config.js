/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  fallbackLng: {
    default: ['en'],
    // 'de-CH': ['fr'],
  },
  nonExplicitSupportedLngs: true,
}