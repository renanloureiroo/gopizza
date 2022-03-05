import firestore from "@react-native-firebase/firestore"
import React, { useEffect } from "react"

import { Container, Photo, Status, Subtitle, Title } from "./styles"

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated"

import { StyleSheet, useWindowDimensions } from "react-native"

interface OrderCardProps {
  index: number
  data: {
    id: string
    photo_url: string
    status: "pronto" | "preparando" | "entregue"
    name: string
    desk_number: number
    quantity: number
  }
}

export const OrderCard = ({ index, data }: OrderCardProps) => {
  const { width } = useWindowDimensions()

  const positionY = useSharedValue(width)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: positionY.value,
        },
      ],
    }
  })
  const handleState = () => {
    if (data.status === "pronto") {
      firestore()
        .collection("orders")
        .doc(data.id)
        .update({ status: "entregue" })
    }
  }

  useEffect(() => {
    positionY.value = withTiming(0, {
      duration: 1000,
    })
  }, [])

  return (
    <Animated.View style={[animatedStyle, style.container]}>
      <Container index={index} onPress={handleState}>
        <Photo source={{ uri: data.photo_url }} />

        <Title>{data.name}</Title>
        <Subtitle>
          Mesa {data.desk_number} - Qnt {data.quantity}
        </Subtitle>

        <Status status={data.status}>{data.status}</Status>
      </Container>
    </Animated.View>
  )
}

const style = StyleSheet.create({
  container: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
})
