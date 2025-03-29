import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { View, StyleSheet, Image } from 'react-native';

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
    width: 160, 
    height: 160, 
    margin: 5, 
    borderRadius: 8, 
    borderWidth: 8, 
    borderColor: "#4B4E5530"
  },
  image:{
    flex: 1,
  }
})
