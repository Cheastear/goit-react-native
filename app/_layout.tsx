import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { useFonts } from "expo-font";

import RegistrationScreen from "@/Screens/RegistrationScreen";
import LoginScreen from "@/Screens/LoginScreen";
import PostsScreen from "@/Screens/PostsScreen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) return null;

  return <LoginScreen />;
}
