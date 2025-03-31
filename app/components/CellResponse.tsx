import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { HapticFeedback } from './HapticTab';
import { Letter } from '../screens/PlayScreen';
import Colors from '../constants/Colors';

interface CellResponseProps {
  letter: Letter | undefined
  onPress: () => void;
  color: string;
}

export function CellResponse(props: CellResponseProps) {

  const { letter, onPress = () => {}, color } = props;
  
  return (
    <View style={styles.container}>
      <HapticFeedback style={styles.cell} onPress={onPress}>
        {letter && <Text style={[styles.letter, {color: color}]}>{letter.letter}</Text>}
      </HapticFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 50, 
    height: 50, 
    backgroundColor: Colors.response.background, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8,
  },
  container: {
    width: 50, 
    height: 52,
    borderRadius: 8,
    backgroundColor: Colors.response.background3D, 
    marginHorizontal: 2, 
  },
  letter: {
    fontSize: 36, 
    color: Colors.response.letter, 
    fontWeight: 'bold',
  }
});
