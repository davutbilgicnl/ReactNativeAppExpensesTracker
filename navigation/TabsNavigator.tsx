import { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';
import { INavigationProps } from '../interfaces/INavigationProps';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';

const BottomTab = createBottomTabNavigator();

interface ITabsNavigatorProps extends INavigationProps {}

const TabsNavigator: React.FC<ITabsNavigatorProps> = ({ navigation, route }) => {
  const colors = useSelector((state: RootState) => state.theme.colors);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTitleAlign: 'center',
      headerShown: false,
    });
  }, [navigation]);

  return (
    <BottomTab.Navigator
      initialRouteName="RecentExpenses"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        tabBarStyle: { backgroundColor: colors.background },
        tabBarActiveTintColor: colors.text,
      }}
    >
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" size={size} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
