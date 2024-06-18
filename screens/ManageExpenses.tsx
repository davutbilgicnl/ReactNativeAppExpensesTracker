import { Text, View } from 'react-native';
import { INavigationProps } from '../interfaces/INavigationProps';
import { useLayoutEffect } from 'react';
import { translations } from '../i18n/translations';

export interface IManageExpensesProps extends INavigationProps {
  expenseId?: string;
}

const ManageExpenses: React.FC<IManageExpensesProps> = ({ navigation, route }) => {
  const editedExpenseId = (route.params as IManageExpensesProps)?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? translations.editExpense : translations.addExpense,
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>Manage Expenses</Text>
    </View>
  );
};

export default ManageExpenses;
