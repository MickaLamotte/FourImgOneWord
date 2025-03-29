import { Button, Dimensions, Text, View, StyleSheet } from "react-native";
import { CardImage } from "../components/CardImage";
import { CellResponse } from "../components/CellResponse";
import { CellLetter } from "../components/CellLetter";

export default function PlayScreen() {

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
      }}
    >
      
      <View style={{flexDirection: 'row', marginTop: 100, flexWrap: 'wrap', justifyContent: 'center'}}>
        <CardImage color='red'/>
        <CardImage color='blue'/>
        <CardImage color='green'/>
        <CardImage color='pink'/>
      </View>

      <View style={styles.containerAnswer}>
        <CellResponse letter="W" />
        <CellResponse letter="O" />
        <CellResponse letter="R" />
        <CellResponse letter="D" />
        <CellResponse letter="S" />
      </View>

      <View style={{flexDirection: 'row', marginBottom: 40}}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <CellLetter letter="S" />
            <CellLetter letter="S" />
            <CellLetter letter="S" />
            <CellLetter letter="S" />
            <CellLetter letter="S" />
            <CellLetter letter="S" />
          </View>

          <View style={{flexDirection: 'row', marginTop: 2}}>
            <CellLetter letter="S" />
            <CellLetter letter="S" />
            <CellLetter letter="S" />
            <CellLetter letter="S" />
            <CellLetter letter="S" />
            <CellLetter letter="S" />
          </View>
        </View>
        <View>
          <Button title="Submit" onPress={() => {}} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  containerAnswer: {
    flexDirection: 'row', 
    marginTop: 48,
    shadowColor: '#4A6AB2',
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  }
})