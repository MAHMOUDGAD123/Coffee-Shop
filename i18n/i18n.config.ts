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
      decimal2: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      decimal1: {
        style: 'decimal',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
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
        currency: 'EGP',
        currencyDisplay: 'symbol',
        numberingSystem: 'arab',
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      decimal2: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        numberingSystem: 'arab',
      },
      decimal1: {
        style: 'decimal',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
        numberingSystem: 'arab',
      },
      integer: {
        style: 'decimal',
        maximumFractionDigits: 0,
        numberingSystem: 'arab',
      },
      percent: {
        style: 'percent',
        useGrouping: false,
        numberingSystem: 'arab',
      },
      compact: {
        style: 'decimal',
        notation: 'compact',
        compactDisplay: 'short',
        numberingSystem: 'arab',
      },
    },
  },
}));
