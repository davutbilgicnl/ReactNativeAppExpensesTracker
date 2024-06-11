import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import ManageExpenses from '../screens/ManageExpenses';
import { Appearance, useColorScheme } from 'react-native';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../store/redux/theme-slice';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const deviceTheme = useColorScheme();
  const dispatch = useDispatch();

  const handleAppearanceChange = (preferences: Appearance.AppearancePreferences) => {
    const theme = deviceTheme === 'dark' ? 'dark' : 'light';
    dispatch(setTheme(theme));
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(handleAppearanceChange);

    return () => subscription.remove();
  }, [deviceTheme]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
        <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
