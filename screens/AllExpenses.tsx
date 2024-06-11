import { Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';

export interface IAllExpensesProps extends INavigationProps {}

const AllExpenses: React.FC<IAllExpensesProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>All Expenses</Text>
    </View>
  );
};

export default AllExpenses;
