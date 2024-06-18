import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IExpense } from '../../interfaces/IExpense';
import { ThemeColors } from '../../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux/store';
import ExpenseItem from './ExpenseItem';
import { memo, useMemo } from 'react';

interface IExpensesListProps {
  expenses: IExpense[];
}

const ExpensesList: React.FC<IExpensesListProps> = ({ expenses }) => {
  const colors = useSelector((state: RootState) => state.theme.colors);
  const styles = useMemo(() => createStyles(colors), [colors]);

  const renderExpenseItem = ({ item }: { item: IExpense }) => {
    return <ExpenseItem expenseItem={item} onPress={() => {}} />;
  };

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        style={styles.flatList}
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default memo(ExpensesList);

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    flatListContainer: {
      backgroundColor: colors.background,
    },
    flatList: {},
    expenseItem: {
      color: colors.text,
    },
  });
