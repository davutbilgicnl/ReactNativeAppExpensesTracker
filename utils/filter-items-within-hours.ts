import { IExpense } from '../interfaces/IExpense';

export const filterItemsWithinHours = (items: IExpense[], hours: number): IExpense[] => {
  const currentDate = new Date();
  const cutoffDate = new Date(currentDate.getTime() - hours * 60 * 60 * 1000);

  const filteredItems: IExpense[] = items.filter((item) => {
    try {
      const itemDate = new Date(item.date);
      return itemDate >= cutoffDate;
    } catch (error) {
      return false;
    }
  });

  return filteredItems;
};
