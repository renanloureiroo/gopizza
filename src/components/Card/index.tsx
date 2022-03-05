import React, { useEffect } from "react"

import {
  Container,
  Content,
  Details,
  Photo,
  Name,
  Wrapper,
  Description,
  Line,
} from "./styles"

import Pizza from "@assets/pizza.png"

import Icon from "@expo/vector-icons/Feather"
import { useTheme } from "styled-components/native"
import { RectButtonProps } from "react-native-gesture-handler"

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

import { useWindowDimensions } from "react-native"

type Pizza = {
  id: string
  name: string
  description: string
  name_insensitive: string
  photo_path: string
  photo_url: string
  prices_sizes: {
    p: number
    m: number
    g: number
  }
}

interface Props extends RectButtonProps {
  data: Pizza
  duration?: number
}

const Card = ({ data, duration = 300, ...rest }: Props) => {
  const theme = useTheme()

  const { width } = useWindowDimensions()
  const opacity = useSharedValue(0)
  const positionX = useSharedValue(0.25 * width)

  const cardStyleAnimated = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          translateX: positionX.value,
        },
      ],
    }
  })

  useEffect(() => {
    opacity.value = withTiming(1, { duration: duration })
    positionX.value = withTiming(0, {
      duration,
    })
  }, [])

  return (
    <Animated.View style={cardStyleAnimated}>
      <Container>
        <Content {...rest}>
          <Animated.View>
            <Photo
              source={{
                uri: data.photo_url,
              }}
            />
          </Animated.View>

          <Details>
            <Wrapper>
              <Name>{data.name}</Name>
              <Icon name="chevron-right" size={16} color={theme.COLORS.SHAPE} />
            </Wrapper>
            <Description>{data.description}</Description>
          </Details>
        </Content>
        <Line />
      </Container>
    </Animated.View>
  )
}

export { Card, Pizza }
