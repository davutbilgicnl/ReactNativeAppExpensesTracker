import { IExpense } from '../interfaces/IExpense';
import { DUMMY_EXPENSES } from '../data/dummy-data';

// Simulate network delay
const simulateNetworkDelay = async () => await new Promise((resolve) => setTimeout(resolve, 2500));

// Utility function to find the index of an expense by its ID
const findExpenseIndexById = (expenses: IExpense[], expenseId: string) =>
  expenses.findIndex((expense) => expense.id === expenseId);

export const expensesService = {
  fetchExpenses: async (): Promise<IExpense[]> => {
    await simulateNetworkDelay();
    try {
      return DUMMY_EXPENSES;
    } catch (error) {
      throw new Error('Failed to fetch expenses');
    }
  },

  deleteExpense: async (expenseId: string): Promise<IExpense[]> => {
    await simulateNetworkDelay();
    const index = findExpenseIndexById(DUMMY_EXPENSES, expenseId);
    if (index !== -1) {
      const updatedExpenses = [...DUMMY_EXPENSES];
      updatedExpenses.splice(index, 1);
      // Assuming this is where we'd integrate with a more persistent storage solution
      // updateStorage(updatedExpenses);
      return updatedExpenses;
    }
    throw new Error('Expense not found');
  },

  updateExpense: async (expense: IExpense): Promise<IExpense[]> => {
    await simulateNetworkDelay();
    const index = findExpenseIndexById(DUMMY_EXPENSES, expense.id);
    if (index !== -1) {
      // Create a new array for immutability
      const updatedExpenses = DUMMY_EXPENSES.map((e, i) => (i === index ? expense : e));
      // Assuming this is where we'd integrate with a more persistent storage solution
      // updateStorage(updatedExpenses);
      return updatedExpenses;
    }
    throw new Error('Expense not found');
  },

  addExpense: async (expense: IExpense): Promise<IExpense[]> => {
    // console.log(new Date().toISOString() + Math.random().toString());

    await simulateNetworkDelay();
    // Assuming this is where we'd integrate with a more persistent storage solution
    // updateStorage([...DUMMY_EXPENSES, expense]);
    return [...DUMMY_EXPENSES, expense];
  },
};
