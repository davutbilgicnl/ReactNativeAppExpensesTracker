import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IExpense } from '../../interfaces/IExpense';
import { ThemeColors } from '../../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux/store';

interface IExpensesListProps {
  expenses: IExpense[];
}

const ExpensesList: React.FC<IExpensesListProps> = ({ expenses }) => {
  const colors = useSelector((state: RootState) => state.theme.colors);
  const styles = createStyles(colors);

  const renderExpenseItem = ({ item }: { item: IExpense }) => {
    return <Text style={styles.expenseItem}>{item.title}</Text>;
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

export default ExpensesList;

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    flatListContainer: {
      backgroundColor: colors.secondary,
    },
    flatList: {},
    expenseItem: {
      color: colors.text,
      // padding: 8,
    },
  });
