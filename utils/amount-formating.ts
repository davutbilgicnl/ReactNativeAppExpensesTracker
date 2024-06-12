//expo localization
//npx expo install expo-localization

import { getLocales } from 'expo-localization';

/**
 * Formats an amount.
 * @param {number | string} amount - The amount to format.
 * @returns {string} The formatted amount.
 * @throws {Error} When the amount is not a valid number.
 * @example
 * formatAmount(1234.56); // e.g., "$1,234.56"
 */
export const formatAmount = (amount: number | string): string => {
  const parsedAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(parsedAmount) || !isFinite(parsedAmount)) {
    throw new Error('Invalid amount. Amount must be a finite number.');
  }

  const locales = getLocales();
  const locale = locales[0].languageTag;
  const currencyCode = locales[0].currencyCode?.toString() || 'USD';

  let formattedAmount;

  try {
    formattedAmount = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
    }).format(parsedAmount);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to format the amount: ${error.message}`);
    } else {
      throw new Error(`Failed to format the amount: ${String(error)}`);
    }
  }

  return formattedAmount;
};
