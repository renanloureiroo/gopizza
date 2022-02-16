import React from "react"

import {
  Container,
  Content,
  Details,
  Image,
  Name,
  Wrapper,
  Description,
  Line,
} from "./styles"

import Pizza from "@assets/pizza.png"

import Icon from "@expo/vector-icons/Feather"
import { useTheme } from "styled-components/native"

export const Card = () => {
  const theme = useTheme()
  return (
    <Container>
      <Content>
        <Image source={Pizza} />
        <Details>
          <Wrapper>
            <Name>Margherita</Name>
            <Icon name="chevron-right" size={16} color={theme.COLORS.SHAPE} />
          </Wrapper>
          <Description>
            Mussarela, manjericão fresco, parmesão e tomate.
          </Description>
        </Details>
      </Content>
      <Line />
    </Container>
  )
}
