import * as Haptics from 'expo-haptics';
import { View, Text } from 'react-native';

interface CellLetterProps {
  letter: string
}

export function CellLetter(props: CellLetterProps) {

  const { letter } = props;
  
  return (
    <View style={{width: 50, height: 50, marginHorizontal: 2, justifyContent: 'center', alignItems: 'center', borderRadius: 8}}>
      <Text style={{fontSize: 28, color: 'white', fontWeight: 'bold'}}>{letter}</Text>
    </View>
  );
}
