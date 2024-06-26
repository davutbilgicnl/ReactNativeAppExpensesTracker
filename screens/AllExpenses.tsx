import { useLayoutEffect, useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { INavigationProps } from '../interfaces/INavigationProps';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/redux/store';
import { ThemeColors } from '../theme/colors';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

import { translations } from '../i18n/translations';

export interface IAllExpensesProps extends INavigationProps {}

const AllExpenses: React.FC<IAllExpensesProps> = ({ navigation, route }) => {
  const { loading, expenses, error } = useSelector((state: RootState) => state.expenses);

  const colors = useSelector((state: RootState) => state.theme.colors);
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expenses}
        periodName={translations.total}
        navigation={navigation}
        route={route}
      />
    </View>
  );
};

export default AllExpenses;

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
