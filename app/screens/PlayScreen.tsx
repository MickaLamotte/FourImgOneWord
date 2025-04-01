import { View, StyleSheet } from "react-native";
import { CardImage } from "../components/CardImage";
import { CellResponse } from "../components/CellResponse";
import { CellLetter } from "../components/CellLetter";
import { ButtonValidation } from "../components/ButtonValidation";
import { useCallback, useEffect, useRef, useState } from "react";
import usePexels from "../services/usePexels";
import useRando from "../services/useRando";
import Colors from "../constants/Colors";
import { Size } from "../constants/Size";

export type Letter = {
  index: number;
  letter: string;
  used: boolean;
}

const MAX_SECURE_RETRY = 3;

export default function PlayScreen() {

  const { word = '', loading: loadingWord, error: errorWord, fetchWord } = useRando();
  const { images, loading: loadingImage, error } = usePexels(word);

  const [ reponse, setReponse ]= useState<(Letter | undefined)[]>([]);
  const [ loading, setLoading ]= useState<boolean>(false);

  const [ propositionLetter, setPropositionLetter ] = useState<Letter[]>([]);

  const retryAPI = useRef(0)

  useEffect(() => {
    const randomLetters = getRandomLetters(12 - word.length);
    setPropositionLetter(word.split('').concat(randomLetters).sort(() => Math.random() - 0.5).map((letter, index) => {
      return {
        index: index,
        letter: letter,
        used: false
      }
    }))
  }, [word]);

  useEffect(() => {
    checkForWin()
  }, [reponse])

  useEffect(() => {
    if(images.includes("") && retryAPI.current < MAX_SECURE_RETRY) {
      retryAPI.current += 1;
      fetchWord()
    } else {
      retryAPI.current = 0;
      setLoading(false);
    }
  }, [images])

  function getRandomLetters(length: number = 12): string[] {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from({ length }, () => letters[Math.floor(Math.random() * letters.length)]);
  }

  function resetGame() {
    setReponse([]);
    setLoading(true)
    fetchWord();
  }

  function resetResponse() {
    reponse.forEach((letter, index) => {
      removeLetterToReponse(index, letter);
    });
  }

  const addLetterToReponse = useCallback((letter: Letter, index: number) => {
    if(reponse.length === word.length && !reponse.includes(undefined)) {return}
    setPropositionLetter(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index].used = true;
      return updatedItems
    })
    var i = 0;
    while(i <= word.length - 1){
      if(reponse[i] === undefined){
        setReponse(prevItems => {
          const updatedItems = [...prevItems];
          updatedItems[i] = letter;
          return updatedItems
        })
        break;
      }
      i++;
    }
  }, [reponse, word])

  const removeLetterToReponse = useCallback((index: number, letter: Letter | undefined) => {
    if(letter === undefined) return
    setPropositionLetter(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[letter?.index].used = false;
      return updatedItems
    })
    setReponse(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index] = undefined;
      return updatedItems
    })
  }, [])

  const getColor = useCallback((textColor: boolean = false) => {
    if(reponse.length === word.length && !reponse.includes(undefined)) {
      if(reponse.map(letter => letter?.letter).join('') === word) {
        return Colors.response.success;
      } else {
        return Colors.response.fail;
      }
    }
    return textColor ? Colors.response.letter : Colors.response.blurDefault;
  }, [reponse, word])

  function checkForWin() {
    if(reponse.map(letter => letter?.letter).join('') === word) {
      setTimeout(() => {resetGame()}, 1000);
    }
  }

  return (
      <View style={styles.screen}>
        <View style={styles.gridImage}>
          {images.map((image, index) => (
              <CardImage key={index} image={image} loading={loading} />
            ))
          }
        </View>

        <View style={[styles.containerAnswer, {shadowColor: getColor()}]}>
          {word.split('').map((letter, index) => (
            <CellResponse 
              key={index} 
              letter={reponse.length >= index + 1 ? reponse[index] : undefined} 
              onPress={() => removeLetterToReponse(index, reponse[index])}
              color={getColor(true)}
            />
          ))}
        </View>

        <View style={styles.row}>
            <View style={styles.gridLetterToPick}>
              {propositionLetter.map((letter, index) => (
                <CellLetter key={index} letter={letter} onPress={() => addLetterToReponse(letter, index)}/>
              ))}
            </View>
            <ButtonValidation onPress={() => {resetResponse()}} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  gridImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: (Size.image * 2) + 20
  },
  containerAnswer: {
    flexDirection: 'row',
    shadowColor: '#4A6AB2',
    shadowRadius: 12,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10
  },
  row: {
    flexDirection: 'row'
  },
  gridLetterToPick: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    flex: 6
  }
})