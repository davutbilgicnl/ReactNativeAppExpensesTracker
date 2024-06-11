import { Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';

export type ManageExpensesProps = {
  navProps: INavigationProps;
};
const ManageExpenses: React.FC<ManageExpensesProps> = ({ navProps }) => {
  return (
    <View>
      <Text>All Expenses</Text>
    </View>
  );
};
