import { Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';

export interface IManageExpensesProps extends INavigationProps {}

const ManageExpenses: React.FC<IManageExpensesProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Manage Expenses</Text>
    </View>
  );
};

export default ManageExpenses;
