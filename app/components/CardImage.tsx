import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { View, StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';
import { Size } from '../constants/Size';

interface CardImageProps {
  image: string
}

export function CardImage(props: CardImageProps) {

  const { image } = props;

  
  return (
    <View style={styles.container}>
      <Image style={[styles.image]} src={image}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Size.image, 
    height: Size.image, 
    margin: 5, 
    borderRadius: 8, 
    borderWidth: 8,
    backgroundColor: Colors.cardImage.background,
    borderColor: Colors.cardImage.background
  },
  image:{
    flex: 1,
  }
})
