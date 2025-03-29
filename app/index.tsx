import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import PlayScreen from "./screens/PlayScreen";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ImageBackground source={require("./assets/images/bg41.png")} resizeMode="cover" style={[StyleSheet.absoluteFill]}>
      <SafeAreaView>
        <PlayScreen />
      </SafeAreaView>
    </ImageBackground>
  );
}
