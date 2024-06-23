/**
 * Interface for Expense
 * @interface IExpense
 * @property {string} id - The id of the expense
 * @property {string} title - The title of the expense
 * @property {number} amount - The amount of the expense
 * @property {string} currencyCode - The locale of the expense
 * @property {Date} date - The date of the expense
 */
export interface IExpense {
  id: string;
  title: string;
  amount: number;
  currencyCode: string;
  date: string;
}
