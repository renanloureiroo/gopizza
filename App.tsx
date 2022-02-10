import React from "react"
import { LogBox } from "react-native"

import AppLoading from "expo-app-loading"

import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans"
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"
import { Inter_500Medium } from "@expo-google-fonts/inter"

import { ThemeProvider } from "styled-components/native"
import theme from "./src/theme"

import { SignIn } from "@screens/SignIn"
import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from "react-native-gesture-handler"

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
])

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
    Inter_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <SignIn />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
