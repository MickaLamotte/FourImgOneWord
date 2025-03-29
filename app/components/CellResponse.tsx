import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { HapticFeedback } from './HapticTab';
import { Letter } from '../screens/PlayScreen';

interface CellResponseProps {
  letter: Letter | undefined
  onPress: () => void;
}

export function CellResponse(props: CellResponseProps) {

  const { letter, onPress = () => {} } = props;
  
  return (
    <HapticFeedback style={styles.cell} onPress={onPress}>
      {letter && <Text style={styles.letter}>{letter.letter}</Text>}
    </HapticFeedback>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 50, 
    height: 50, 
    backgroundColor: '#141922', 
    marginHorizontal: 2, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8,
    borderColor: '#101010',
    borderWidth: 2,
  },
  letter: {
    fontSize: 36, 
    color: 'white', 
    fontWeight: 'bold',
  }
});
