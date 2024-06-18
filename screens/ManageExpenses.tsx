import { Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';

export interface IManageExpensesProps extends INavigationProps {}

const ManageExpenses: React.FC<IManageExpensesProps> = ({ navigation, route }) => {
  // const route = useRoute();
  // const id = route.params?.expenseItemId as string;

  return (
    <View>
      <Text>Manage Expenses</Text>
    </View>
  );
};

export default ManageExpenses;
