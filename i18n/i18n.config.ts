export default defineI18nConfig(() => ({
  locale: 'en',
  availableLocales: ['en', 'ar'],
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      integer: {
        style: 'decimal',
        maximumFractionDigits: 0,
      },
      percent: {
        style: 'percent',
        useGrouping: false,
      },
      compact: {
        style: 'decimal',
        notation: 'compact',
        compactDisplay: 'short',
      },
    },
    ar: {
      currency: {
        style: 'currency',
        currency: 'EGP', // Default currency (can be overridden at runtime)
        currencyDisplay: 'symbol',
        numberingSystem: 'arab', // Forces Eastern digits: ١٫٢٣ $
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        numberingSystem: 'arab', // ١٢٣٫٤٥
      },
      integer: {
        style: 'decimal',
        maximumFractionDigits: 0,
        numberingSystem: 'arab',
      },
      percent: {
        style: 'percent',
        useGrouping: false,
        numberingSystem: 'arab', // ٥٠٪
      },
      compact: {
        style: 'decimal',
        notation: 'compact',
        compactDisplay: 'short',
        numberingSystem: 'arab', // ١٫٥ ألف
      },
    },
  },
}));
