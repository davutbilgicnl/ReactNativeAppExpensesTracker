import { Text, View, StyleSheet } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { ThemeColors } from '../theme/colors';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

import { translations } from '../i18n/translations';
import { useMemo } from 'react';
import { filterItemsWithinDays } from '../utils/filter-items-within-days';
import { filterItemsWithinHours } from '../utils/filter-items-within-hours';

export interface IRecentExpensesProps extends INavigationProps {}

const RecentExpenses: React.FC<IRecentExpensesProps> = ({ navigation, route }) => {
  const colors: ThemeColors = useSelector((state: RootState) => state.theme.colors);
  const styles = useMemo(() => createStyles(colors), [colors]);

  const { loading, expenses, error } = useSelector((state: RootState) => state.expenses);

  const filteredExpenses = filterItemsWithinDays(expenses, 7);
  // const filteredExpenses = filterItemsWithinHours(expenses, 24);

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={filteredExpenses}
        periodName={translations.last7Days}
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

export default RecentExpenses;

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text,
      fontSize: 18,
    },
  });
