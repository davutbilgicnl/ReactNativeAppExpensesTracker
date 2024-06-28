import { IExpense } from '../interfaces/IExpense';

export const filterItemsWithinDays = (items: IExpense[], days: number): IExpense[] => {
  const currentDate = new Date();
  currentDate.setUTCHours(0, 0, 0, 0);
  const cutoffDate = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000);

  const filteredItems: IExpense[] = items.filter((item) => {
    try {
      const itemDate = new Date(item.date);
      // itemDate.setUTCHours(0, 0, 0, 0);
      return itemDate >= cutoffDate;
    } catch (error) {
      return false;
    }
  });

  return filteredItems;
};
