import { View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { IExpense } from '../../interfaces/IExpense';

interface IExpensesOutputProps {
  expenses: IExpense[];
  periodName: string;
}

const ExpensesOutput: React.FC<IExpensesOutputProps> = ({ expenses, periodName }) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;
