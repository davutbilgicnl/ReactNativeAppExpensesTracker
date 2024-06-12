import { Text, View, StyleSheet } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { ThemeColors } from '../theme/colors';

export interface IRecentExpensesProps extends INavigationProps {}

const RecentExpenses: React.FC<IRecentExpensesProps> = ({ navigation, route }) => {
  const colors = useSelector((state: RootState) => state.theme.colors);
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recent Expenses</Text>
    </View>
  );
};

export default RecentExpenses;

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.secondary,
    },
    text: {
      color: colors.text,
      fontSize: 18,
    },
  });
