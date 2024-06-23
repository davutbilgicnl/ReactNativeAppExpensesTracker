import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './theme-slice';
import expensesReducer from './expenses-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    expenses: expensesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {theme: ThemeState, expenses: ExpensesState}
export type AppDispatch = typeof store.dispatch;
