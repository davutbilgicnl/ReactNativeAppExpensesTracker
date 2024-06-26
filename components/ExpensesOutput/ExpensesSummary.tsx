import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { IExpense } from '../../interfaces/IExpense';
import { formatCurrency } from '../../i18n/currency';
import { ThemeColors } from '../../theme/colors';
import { RootState } from '../../store/redux/store';
import { useMemo } from 'react';
import { INavigationProps } from '../../interfaces/INavigationProps';

interface IExpensesSummaryProps extends INavigationProps {
  expenses: IExpense[];
  periodName: string;
}

const ExpensesSummary: React.FC<IExpensesSummaryProps> = ({
  navigation,
  route,
  expenses,
  periodName,
}) => {
  const colors = useSelector((state: RootState) => state.theme.colors);
  const styles = useMemo(() => createStyles(colors), [colors]);

  const initalValueOfSum = 0;
  const expensesSummary = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, initalValueOfSum);

  const amountWithCurrency = formatCurrency(expensesSummary);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>{amountWithCurrency}</Text>
    </View>
  );
};

export default ExpensesSummary;

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      padding: 8,
      marginHorizontal: 8,
      backgroundColor: colors.expenseSummeryBackground,
      borderRadius: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    period: {
      fontSize: 14,
      color: colors.text,
    },
    sum: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
    },
  });
