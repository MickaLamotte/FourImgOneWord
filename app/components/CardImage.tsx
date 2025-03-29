import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { View, Text } from 'react-native';

interface CardImageProps {
  color: string
}

export function CardImage(props: CardImageProps) {

  const { color } = props;

  
  return (
    <View style={{width: 150, height: 150, margin: 5, borderRadius: 8, borderWidth: 8, borderColor: "#4B4E5530"}}>
      <View style={{flex: 1, backgroundColor: color}}/>
    </View>
  );
}
