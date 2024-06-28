import i18n from './i18n';

export const getTimeOfDate = (date: Date | string): string => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    // For 24-hour format
    const formattedTime = i18n.strftime(dateObj, '%H:%M');
    // For 12-hour format with AM/PM, use '%I:%M %p' instead of '%H:%M'
    return formattedTime.toString();
  } catch (error) {
    console.error('Error formatting time:', error);
    throw error;
  }
};
