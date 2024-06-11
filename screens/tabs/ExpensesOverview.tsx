import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from '../RecentExpenses';
import AllExpenses from '../AllExpenses';

const BottomTab = createBottomTabNavigator();

const ExpensesOverview: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="RecentExpenses" component={RecentExpenses} />
      <BottomTab.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTab.Navigator>
  );
};

export default ExpensesOverview;
