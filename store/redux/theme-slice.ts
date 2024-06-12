import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { lightColors, darkColors, ThemeColors } from '../../theme/colors';
import { Appearance } from 'react-native';

interface ThemeState {
  isDarkTheme: boolean;
  colors: ThemeColors;
}

export type ThemeType = 'light' | 'dark';

const isDeviceOnDarkTheme = Appearance.getColorScheme() === 'dark';

const initialState: ThemeState = {
  isDarkTheme: false,
  colors: isDeviceOnDarkTheme ? darkColors : lightColors,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.isDarkTheme = action.payload === 'dark' ? true : false;
      state.colors = state.isDarkTheme ? darkColors : lightColors;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
