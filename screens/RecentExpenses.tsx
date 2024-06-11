import { Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';

export type RecentExpensesProps = {
  navProps: INavigationProps;
};

const RecentExpenses: React.FC<RecentExpensesProps> = ({ navProps }) => {
  return (
    <View>
      <Text>All Expenses</Text>
    </View>
  );
};
