import { Pressable, StyleSheet, Text, View } from 'react-native';

import { IExpense } from '../../interfaces/IExpense';
import { ThemeColors } from '../../theme/colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux/store';
import { formatDate } from '../../i18n/date';
import { formatCurrency } from '../../i18n/currency';
import { memo, useMemo } from 'react';

interface ExpenseItemProps {
  expenseItem: IExpense;
  onPress: () => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expenseItem, onPress }) => {
  const { title, date, amount } = expenseItem;
  const formattedDate = formatDate(date);
  const formattedAmount = formatCurrency(amount);

  const colors = useSelector((state: RootState) => state.theme.colors);
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={styles.text}>{formattedDate}</Text>
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
      elevation: 4, // Android
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
