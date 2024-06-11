import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './theme-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

//to improve type safety and get better autocompletion
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
