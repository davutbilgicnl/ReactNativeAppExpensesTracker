import { Text, View } from 'react-native';
import { IExpense } from '../../interfaces/IExpense';
import { formatCurrency } from '../../i18n/currency';

interface IExpensesSummaryProps {
  expenses: IExpense[];
  periodName: string;
}

const ExpensesSummary: React.FC<IExpensesSummaryProps> = ({ expenses, periodName }) => {
  const initalValueOfSum = 0;
  const expensesSummary = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, initalValueOfSum);

  const amountWithCurrency = formatCurrency(expensesSummary);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>{amountWithCurrency}</Text>
    </View>
  );
};

export default ExpensesSummary;
