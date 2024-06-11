import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';
import { useLayoutEffect } from 'react';
import { INavigationProps } from '../interfaces/INavigationProps';

const BottomTab = createBottomTabNavigator();

interface ITabsNavigatorProps extends INavigationProps {}

const TabsNavigator: React.FC<ITabsNavigatorProps> = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Expenses Tracker',
      headerTitleAlign: 'center',
      headerShown: false,
    });
  }, [navigation]);
  return (
    <BottomTab.Navigator initialRouteName="RecentExpenses">
      <BottomTab.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTab.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
