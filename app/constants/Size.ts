import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const PADDING = 16;
const margin = 2;

export const Size = {
  letterToPick: ((width - (PADDING * 2) - (margin*2*7)) / 7),
  image: ((width / 2) - (PADDING) - 8) - 5
};
