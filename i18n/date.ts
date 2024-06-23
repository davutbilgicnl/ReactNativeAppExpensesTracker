import i18n from './i18n';
import * as Localization from 'expo-localization';

export const formatDate = (date: Date | string): string => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const formattedDate = i18n.strftime(dateObj, '%d-%m-%Y');
    return formattedDate.toString();
  } catch (error) {
    console.error('Error formatting currency:', error);
    throw error;
  }
};
