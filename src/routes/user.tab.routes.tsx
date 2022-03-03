import React from "react"
import { Platform } from "react-native"
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"
import { useTheme } from "styled-components/native"

import { Home } from "@screens/Home"
import { Orders } from "@screens/Orders"
import { ButtonMenu } from "@components/ButtonMenu"

const { Navigator, Screen } = createBottomTabNavigator()

export const UserTabRoutes = () => {
  const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.COLORS.SECONDARY_900,
        tabBarInactiveTintColor: theme.COLORS.SECONDARY_400,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <ButtonMenu title="Cardápio" color={color} />
          ),
        }}
      />
      <Screen
        name="orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color }) => (
            <ButtonMenu title="Pedidos" color={color} notification="5" />
          ),
        }}
      />
    </Navigator>
  )
}
