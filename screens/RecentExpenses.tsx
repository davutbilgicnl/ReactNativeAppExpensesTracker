import { Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';

export interface IRecentExpensesProps extends INavigationProps {}

const RecentExpenses: React.FC<IRecentExpensesProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Recent Expenses</Text>
    </View>
  );
};

export default RecentExpenses;
