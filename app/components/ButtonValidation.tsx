import { Text, StyleSheet, View, Image } from 'react-native';
import { Size } from '../constants/Size';
import { HapticFeedback } from './HapticTab';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonValidationProps {
  onPress: () => void;
}

export function ButtonValidation(props: ButtonValidationProps) {

  const { onPress = () => {} } = props;
  
  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.btnReset.background, Colors.btnReset.background2]} style={styles.gradient}>
        <HapticFeedback onPress={onPress} style={styles.pressable}>
          <Text style={styles.letter}>A</Text>
          <Image source={require('../assets/images/icon_brush.png')} style={styles.icon} />
        </HapticFeedback>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Size.letterToPick,
    height: (Size.letterToPick * 2) + 4,
    borderRadius: 8,
    backgroundColor: '#46760095',
    marginVertical: 2,
  },
  gradient: {
    width: Size.letterToPick,
    height: (Size.letterToPick * 2),
    borderRadius: 8,
  },
  pressable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row'
  },
  letter: {
    fontSize: 28,
    color: Colors.btnReset.text, 
    fontWeight: 'bold',
    transform: [{ rotate: '-12deg' }]
  },
  icon: {
    height: 20,
    width: 20,
    marginTop: -35,
    marginLeft: -5,
    transform: [{ rotate: '-12deg' }]
  },
  borderBottom: {
    borderRadius: 8,
    borderBottomWidth: 4,
    borderBottomColor: '#00000040',
  }
});
