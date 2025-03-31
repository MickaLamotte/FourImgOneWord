import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Colors from '../constants/Colors';
import { Size } from '../constants/Size';

interface CardImageProps {
  image: string,
  loading: boolean
}

export function CardImage(props: CardImageProps) {

  const { image, loading } = props;

  
  return (
    <View style={styles.container}>
      {loading || image === "" ? 
        <ActivityIndicator style={[styles.image]} color={"white"}/>
        : <Image style={[styles.image]} src={image}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Size.image, 
    height: Size.image, 
    margin: 5, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, 
    borderWidth: 8,
    backgroundColor: Colors.cardImage.background,
    borderColor: Colors.cardImage.background
  },
  image:{
    width: '100%', 
    height: '100%', 
  }
})
