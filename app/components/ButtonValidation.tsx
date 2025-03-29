import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Size } from '../constants/Size';

interface ButtonValidationProps {
  onPress: () => void;
}

export function ButtonValidation(props: ButtonValidationProps) {

  const { onPress = () => {} } = props;
  
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.letter}>A</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Size.letterToPick,
    flex: 1,
    backgroundColor: '#B0D800',
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8,
  },
  letter: {
    fontSize: 28, 
    color: 'white', 
    fontWeight: 'bold',
    transform: [{ rotate: '-15deg' }]
  }
});
