import { Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';
import { useLayoutEffect } from 'react';

export interface IAllExpensesProps extends INavigationProps {}

const AllExpenses: React.FC<IAllExpensesProps> = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'All Expenses',
      headerTitleAlign: 'center',
      headerShown: true,
    });
  }, [navigation]);
  return (
    <View>
      <Text>All Expenses</Text>
    </View>
  );
};

export default AllExpenses;
