import React from "react"

import { LogBox } from "react-native"

import AppLoading from "expo-app-loading"

import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans"
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display"
import { Inter_500Medium } from "@expo-google-fonts/inter"

import { SignIn } from "@screens/SignIn"
import { Product } from "@screens/Product"
import { StatusBar } from "expo-status-bar"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import { AppProvider } from "./src/contexts"

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
      <AppProvider>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <Product />
      </AppProvider>
    </GestureHandlerRootView>
  )
}
