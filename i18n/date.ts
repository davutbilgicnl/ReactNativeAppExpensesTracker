import i18n from './i18n';
import * as Localization from 'expo-localization';

export const formatDate = (date: Date): string => {
  try {
    return i18n.strftime(date, '%d-%m-%Y').toString();
  } catch (error) {
    console.error('Error formatting currency:', error);
    throw error;
  }
};
