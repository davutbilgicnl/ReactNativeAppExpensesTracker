import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IExpense } from '../../interfaces/IExpense';
import { expensesService } from '../../services/expenses-services';

// Define loading states
enum LoadingState {
  Idle = 'idle',
  Pending = 'pending',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

// Define state interface
interface IExpensesState {
  expenses: IExpense[];
  loading: LoadingState;
  error: string | null;
}

// Initial state
const initialState: IExpensesState = {
  expenses: [],
  loading: LoadingState.Idle,
  error: null,
};

// Thunks
export const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async () => {
  try {
    const response = await expensesService.fetchExpenses();
    console.log('Expenses fetched successfully:');
    return response as IExpense[];
  } catch (error) {
    console.error('Failed to fetch expenses:', error);
  }
});
export const deleteExpense = createAsyncThunk('expenses/deleteExpense', async (id: string) => {
  try {
    const response = await expensesService.deleteExpense(id);
    console.log('Expense deleted successfully:');
    return response as IExpense[];
  } catch (error) {
    console.error('Failed to delete expense:', error);
  }
});
export const updateExpense = createAsyncThunk(
  'expenses/updateExpense',
  async (expense: IExpense) => {
    try {
      const response = await expensesService.updateExpense(expense);
      console.log('Expense updated successfully:');
      return response as IExpense[];
    } catch (error) {
      console.error('Failed to update expense:', error);
    }
  }
);
export const addExpense = createAsyncThunk('expenses/addExpense', async (expense: IExpense) => {
  try {
    const response = await expensesService.addExpense(expense);
    console.log('Expense added successfully:');
    return response as IExpense[];
  } catch (error) {
    console.error('Failed to add expense:', error);
  }
});

// Helper utility functions to update loading and error states
function setLoadingState(state: IExpensesState, loadingState: LoadingState) {
  state.loading = loadingState;
  state.error = null; // Reset error state on loading
}

// Helper utility function to set error state
function setErrorState(
  state: IExpensesState,
  action: PayloadAction<any, string, never, { message: string }>
) {
  state.loading = LoadingState.Failed;
  state.error = action.error.message || null;
}

// Slice
const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    // No need for reducers as we're using createAsyncThunk
  },
  extraReducers: (builder) => {
    // Fetch Expenses
    builder.addCase(fetchExpenses.rejected, (state, action) => {
      setErrorState(
        state,
        action.payload as PayloadAction<any, string, never, { message: string }>
      );
    });
    builder.addCase(fetchExpenses.pending, (state) => {
      setLoadingState(state, LoadingState.Pending);
    });
    builder.addCase(fetchExpenses.fulfilled, (state, action) => {
      state.expenses = action.payload as IExpense[];
      state.loading = LoadingState.Succeeded;
    });
    // Update Expense
    builder.addCase(updateExpense.rejected, (state, action) => {
      setErrorState(
        state,
        action.payload as PayloadAction<any, string, never, { message: string }>
      );
    });
    builder.addCase(updateExpense.pending, (state) => {
      setLoadingState(state, LoadingState.Pending);
    });
    builder.addCase(updateExpense.fulfilled, (state, action) => {
      state.expenses = action.payload as IExpense[];
      state.loading = LoadingState.Succeeded;
    });
    // Delete Expense
    builder.addCase(deleteExpense.rejected, (state, action) => {
      setErrorState(
        state,
        action.payload as PayloadAction<any, string, never, { message: string }>
      );
    });
    builder.addCase(deleteExpense.pending, (state) => {
      setLoadingState(state, LoadingState.Pending);
    });
    builder.addCase(deleteExpense.fulfilled, (state, action) => {
      state.expenses = action.payload as IExpense[];
      state.loading = LoadingState.Succeeded;
    });
    // Add Expense
    builder.addCase(addExpense.rejected, (state, action) => {
      setErrorState(
        state,
        action.payload as PayloadAction<any, string, never, { message: string }>
      );
    });
    builder.addCase(addExpense.pending, (state) => {
      setLoadingState(state, LoadingState.Pending);
    });
    builder.addCase(addExpense.fulfilled, (state, action) => {
      state.expenses = action.payload as IExpense[];
      state.loading = LoadingState.Succeeded;
    });
  },
});

// Export actions and reducer
export const expensesActions = {
  ...expensesSlice.actions,
  fetchExpenses,
  deleteExpense,
  updateExpense,
};
export default expensesSlice.reducer;
