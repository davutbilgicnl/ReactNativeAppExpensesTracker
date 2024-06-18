import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import ManageExpenses from '../screens/ManageExpenses';
import { Appearance, useColorScheme } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/redux/theme-slice';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { ThemeColors } from '../theme/colors';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const colors: ThemeColors = useSelector((state: RootState) => state.theme.colors);
  const dispatch = useDispatch();
  const isOnDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);

  const handleAppearanceChange = (preferences: Appearance.AppearancePreferences) => {
    const theme = preferences.colorScheme === 'dark' ? 'dark' : 'light';
    dispatch(setTheme(theme));
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(handleAppearanceChange);

    return () => subscription.remove();
  }, [isOnDarkTheme]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.tabBarHeaderText,
        }}
      >
        <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
        <Stack.Screen
          name="ManageExpenses"
          component={ManageExpenses}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
