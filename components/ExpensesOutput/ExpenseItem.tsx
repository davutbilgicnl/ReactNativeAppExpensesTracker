import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { memo, useMemo } from 'react';

import { IExpense } from '../../interfaces/IExpense';
import { ThemeColors } from '../../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux/store';
import { formatDate } from '../../i18n/date';
import { formatCurrency } from '../../i18n/currency';
import { INavigationProps } from '../../interfaces/INavigationProps';
import { getTimeOfDate } from '../../i18n/time';

interface ExpenseItemProps extends INavigationProps {
  expenseItem: IExpense;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ navigation, route, expenseItem }) => {
  const colors: ThemeColors = useSelector((state: RootState) => state.theme.colors);
  const styles = useMemo(() => createStyles(colors), [colors]);

  const { id, title, date, amount } = expenseItem;

  const formattedDate = formatDate(date);
  const formattedTime = getTimeOfDate(date);
  const formattedAmount = formatCurrency(amount);

  const expensePressHandler = () => {
    navigation.navigate('ManageExpenses', { expenseId: id });
  };

  return (
    <Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={styles.text}>
            {formattedDate} {formattedTime}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.text, styles.amount]}>{formattedAmount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(ExpenseItem);

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    expenseItem: {
      padding: 12,
      marginVertical: 8,
      marginHorizontal: 8,
      backgroundColor: colors.background,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 6,
      elevation: 6, // Android
      // iOS
      shadowColor: colors.shadow,
      shadowRadius: 4,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.4,
    },
    text: {
      color: colors.text,
    },
    title: {
      fontSize: 18,
      marginBottom: 6,
      fontWeight: 'bold',
    },
    amountContainer: {
      paddingHorizontal: 12,
      paddingVertical: 3,
      justifyContent: 'center',
      alignItems: 'center',
      // borderRadius: 4,
      // borderColor: colors.priceBoxBorder,
      // borderWidth: 1,
    },
    amount: {
      // fontWeight: 'bold',
      fontSize: 18,
    },
    pressed: {
      opacity: 0.5,
    },
  });
