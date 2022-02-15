import React from "react"

import {
  Container,
  Content,
  Description,
  Image,
  Title,
  Wrapper,
} from "./styles"

import Pizza from "@assets/pizza.png"

import Icon from "@expo/vector-icons/Feather"
import { useTheme } from "styled-components/native"

export const Card = () => {
  const theme = useTheme()
  return (
    <Container>
      <Image source={Pizza} />
      <Content>
        <Wrapper>
          <Title>Margherita</Title>
          <Icon name="chevron-right" size={16} color={theme.COLORS.SHAPE} />
        </Wrapper>
        <Description>
          Mussarela, manjericão fresco, parmesão e tomate.
        </Description>
      </Content>
    </Container>
  )
}
