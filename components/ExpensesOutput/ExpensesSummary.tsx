import { Text, View } from 'react-native';
import { IExpense } from '../../interfaces/IExpense';

interface IExpensesSummaryProps {
  expenses: IExpense[];
  periodName: string;
}

const ExpensesSummary: React.FC<IExpensesSummaryProps> = ({ expenses, periodName }) => {
  const initalValueOfSum = 0;
  const expensesSummary = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, initalValueOfSum);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSummary.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
