import { getLocales } from 'expo-localization';

/**
 *
 * This function returns the currency code of the current locale.
 * @returns {string | undefined} The currency code of the current locale.
 * @example
 * getLocaleCurrencyCode(); // e.g., "USD"
 */
export const getLocaleCurrencyCode = (): string | undefined => {
  const locales = getLocales();
  return locales[0]?.currencyCode?.toString();
};
