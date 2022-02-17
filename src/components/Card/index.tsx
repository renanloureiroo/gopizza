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
}

const Card = ({ data, ...rest }: Props) => {
  const theme = useTheme()

  return (
    <Container>
      <Content {...rest}>
        <Photo
          source={{
            uri: data.photo_url,
          }}
        />

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
  )
}

export { Card, Pizza }
