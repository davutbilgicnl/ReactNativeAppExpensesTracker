import { Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';
import { useLayoutEffect } from 'react';

export interface IRecentExpensesProps extends INavigationProps {}

const RecentExpenses: React.FC<IRecentExpensesProps> = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Recent Expenses',
      headerTitleAlign: 'center',
      headerShown: true,
    });
  }, [navigation]);
  return (
    <View>
      <Text>Recent Expenses</Text>
    </View>
  );
};

export default RecentExpenses;
