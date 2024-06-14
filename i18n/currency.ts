import i18n from './i18n';
import * as Localization from 'expo-localization';

export const formatCurrency = (amount: number | string): string => {
  try {
    const localMoneySymbol = Localization.getLocales()[0].currencySymbol?.toString() || '$';
    const amountNumber = typeof amount === 'string' ? parseFloat(amount) : amount;

    return i18n.numberToCurrency(amountNumber, {
      stripInsignificantZeros: true,
      precision: 2,
      unit: localMoneySymbol,
    });
  } catch (error) {
    console.error('Error formatting currency:', error);
    return amount.toString();
  }
};
