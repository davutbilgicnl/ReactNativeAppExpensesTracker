import { Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';

export type AllExpensesProps = {
  navProps: INavigationProps;
};

const AllExpenses: React.FC<AllExpensesProps> = ({ navProps }) => {
  return (
    <View>
      <Text>All Expenses</Text>
    </View>
  );
};
