import { Text, View, StyleSheet } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';
import { ThemeType } from '../store/redux/theme-slice';
import { ThemeColors } from '../theme/colors';

export interface IRecentExpensesProps extends INavigationProps {}

const RecentExpenses: React.FC<IRecentExpensesProps> = ({ navigation, route }) => {
  const colors = useSelector((state: RootState) => state.theme.colors);

  const styles = createStyles(colors);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Recent Expenses',
      headerTitleAlign: 'center',
      headerShown: true,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Recent Expenses</Text>
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
    },
  });
