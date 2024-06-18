import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { RootState } from '../../store/redux/store';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

interface ITextButtonProps {
  title: string;
  color: string;
  onPress: () => void;
}

const TextButton: React.FC<ITextButtonProps> = ({ title, color, onPress }) => {
  const colors = useSelector((state: RootState) => state.theme.colors);
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: color }]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default TextButton;

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 6,
    },
    title: {
      fontSize: 16,
    },
    pressed: {
      opacity: 0.5,
    },
  });
