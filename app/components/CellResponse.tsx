import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { View, Text, StyleSheet } from 'react-native';

interface CellResponseProps {
  letter: string
}

export function CellResponse(props: CellResponseProps) {

  const { letter } = props;
  
  return (
    <View style={styles.cell}>
      <Text style={styles.letter}>{letter}</Text>
    </View>
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
    fontSize: 28, 
    color: 'white', 
    fontWeight: 'bold',
  }
});
