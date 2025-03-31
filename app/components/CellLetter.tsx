import * as Haptics from 'expo-haptics';
import { View, Text, Dimensions, StyleSheet, Pressable } from 'react-native';
import { Size } from '../constants/Size';
import { HapticFeedback } from './HapticTab';
import { useState } from 'react';
import { Letter } from '../screens/PlayScreen';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

interface CellLetterProps {
  letter: Letter
  onPress: () => void;
}

export function CellLetter(props: CellLetterProps) {

  const { letter, onPress = () => {} } = props;
  
  return (
    <>
      {letter.used ? (
        <View style={[styles.container, styles.disable]} />
      ) : (
        <View style={styles.container}>
          <LinearGradient colors={[Colors.letterToPick.background, Colors.letterToPick.background2]} style={styles.gradient}>
            <HapticFeedback style={styles.pressable} onPress={onPress}>
              <Text style={styles.letter}>{letter.letter}</Text>
            </HapticFeedback>
          </LinearGradient>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Size.letterToPick, 
    height: Size.letterToPick,
    margin: 2,
    backgroundColor: '#8C8C8C',
    borderRadius: 8,
  },
  gradient: {
    width: Size.letterToPick,
    height: Size.letterToPick - 4,
    borderRadius: 8,
  },
  pressable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  letter: {
    fontSize: 40, 
    lineHeight: 45,
    color: Colors.letterToPick.letter, 
    fontWeight: 'bold',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 1,
    shadowRadius: 1
  },
  disable: {
    backgroundColor: Colors.letterToPick.disable,
  }
})
