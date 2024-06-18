import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IExpense } from '../../interfaces/IExpense';
import { ThemeColors } from '../../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux/store';
import ExpenseItem from './ExpenseItem';
import { memo, useMemo } from 'react';
import { INavigationProps } from '../../interfaces/INavigationProps';

interface IExpensesListProps extends INavigationProps {
  expenses: IExpense[];
}

const ExpensesList: React.FC<IExpensesListProps> = ({ navigation, route, expenses }) => {
  const colors: ThemeColors = useSelector((state: RootState) => state.theme.colors);
  const styles = useMemo(() => createStyles(colors), [colors]);

  const renderExpenseItem = ({ item }: { item: IExpense }): JSX.Element => {
    return <ExpenseItem expenseItem={item} navigation={navigation} route={route} />;
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
