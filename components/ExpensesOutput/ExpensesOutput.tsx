import { View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

interface IExpensesOutputProps {}

const ExpensesOutput: React.FC<IExpensesOutputProps> = () => {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
