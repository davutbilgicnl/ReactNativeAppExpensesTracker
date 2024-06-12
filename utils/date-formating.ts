import { getLocales } from 'expo-localization';

/**
 * Formats a date.
 *
 * @param {Date | string} date - The date to format.
 * @returns {string} The formatted date.
 * @throws {Error} When the date is not a valid date.
 * @example
 * formatDate(new Date()); // e.g., "December 17, 2021"
 *
 */
export const formatDate = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(parsedDate.getTime())) {
    throw new Error('Invalid date. Date must be a valid date.');
  }

  const locales = getLocales();
  const locale = locales[0].languageTag;

  let formattedDate;

  try {
    formattedDate = new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(parsedDate);
  } catch (error) {
    throw new Error('Failed to format date.');
  }

  return formattedDate;
};
