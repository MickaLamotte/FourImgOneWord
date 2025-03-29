import * as Haptics from 'expo-haptics';
import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import { Size } from '../constants/Size';
import { HapticFeedback } from './HapticTab';
import { useState } from 'react';
import { Letter } from '../screens/PlayScreen';

interface CellLetterProps {
  letter: Letter
  onPress: () => void;
}

export function CellLetter(props: CellLetterProps) {

  const { letter, onPress = () => {} } = props;
  
  return (
    <>
      {letter.used ? (
        <View style={[styles.container, {backgroundColor: "#5B5B5B80"}]} />
      ) : (
        <HapticFeedback style={styles.container} onPress={onPress}>
          <Text style={styles.letter}>{letter.letter}</Text>
        </HapticFeedback>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Size.letterToPick, 
    height: Size.letterToPick,
    margin: 2,
    backgroundColor: 'white',
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 8,
  },
  letter: {
    fontSize: 40, 
    color: 'black', 
    fontWeight: 'bold',
  }
})
