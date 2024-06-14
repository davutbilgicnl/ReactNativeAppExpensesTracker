import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { IExpense } from '../../interfaces/IExpense';
import { RootState } from '../../store/redux/store';
import { useSelector } from 'react-redux';
import { ThemeColors } from '../../theme/colors';

interface IExpensesOutputProps {
  expenses: IExpense[];
  periodName: string;
}

const ExpensesOutput: React.FC<IExpensesOutputProps> = ({ expenses, periodName }) => {
  const colors = useSelector((state: RootState) => state.theme.colors);
  const styles = createStyles(colors);
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: colors.secondary,
    },
  });
