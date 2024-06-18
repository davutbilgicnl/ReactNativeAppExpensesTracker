import { StyleSheet, Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';
import React, { useLayoutEffect, useMemo } from 'react';
import { translations } from '../i18n/translations';
import TextButton from '../components/ui/TextButton';
import { useSelector } from 'react-redux';
import { ThemeColors } from '../theme/colors';
import { RootState } from '../store/redux/store';

export interface IManageExpensesProps extends INavigationProps {
  expenseId?: string;
}

const ManageExpenses: React.FC<IManageExpensesProps> = ({ navigation, route }) => {
  const colors: ThemeColors = useSelector((state: RootState) => state.theme.colors);
  const styles = useMemo(() => createStyles(colors), [colors]);
  const expenseId = (route.params as IManageExpensesProps)?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? translations.editExpense : translations.addExpense,
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = (id: string) => {
    console.log('Deleting expense with id:', id);
  };

  const renderDeleteButton = (expenseId: string): React.ReactNode => {
    return (
      <View style={styles.deleteButtonContainer}>
        <TextButton
          title={translations.delete}
          color={colors.text}
          fontSize={18}
          onPress={() => deleteExpenseHandler(expenseId)}
        />
      </View>
    );
  };

  return <View style={styles.container}>{isEditing && renderDeleteButton(expenseId)}</View>;
};

export default ManageExpenses;

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: colors.background,
    },
    deleteButtonContainer: {
      marginTop: 16,
      padding: 8,
      borderTopWidth: 1,
      borderTopColor: colors.text,
      alignItems: 'center',
    },
  });
