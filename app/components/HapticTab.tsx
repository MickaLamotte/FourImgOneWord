import * as Haptics from 'expo-haptics';
import { Pressable, PressableProps } from 'react-native';

export function HapticFeedback(props: PressableProps) {
  return (
    <Pressable
      {...props}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.

          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}
