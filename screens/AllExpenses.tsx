import { Text, View, StyleSheet } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { ThemeColors } from '../theme/colors';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

import { DUMMY_EXPENSES } from '../data/dummy-data';

export interface IAllExpensesProps extends INavigationProps {}

const AllExpenses: React.FC<IAllExpensesProps> = ({ navigation, route }) => {
  const colors = useSelector((state: RootState) => state.theme.colors);
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>All Expenses</Text> */}
      <ExpensesOutput expenses={DUMMY_EXPENSES} periodName="Total" />
    </View>
  );
};

export default AllExpenses;

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: colors.secondary,
    },
    text: {
      color: colors.text,
      fontSize: 18,
    },
  });
