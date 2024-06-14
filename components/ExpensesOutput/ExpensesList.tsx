import { FlatList, Text } from 'react-native';
import { IExpense } from '../../interfaces/IExpense';

interface IExpensesListProps {
  expenses: IExpense[];
}

const renderExpenseItem = ({ item }: { item: IExpense }) => {
  return <Text>{item.title}</Text>;
};

const ExpensesList: React.FC<IExpensesListProps> = ({ expenses }) => {
  return (
    <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
  );
};

export default ExpensesList;
