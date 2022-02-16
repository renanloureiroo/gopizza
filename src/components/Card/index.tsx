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
import { RectButtonProps } from "react-native-gesture-handler"

type Props = RectButtonProps & {}

export const Card = ({ ...rest }: Props) => {
  const theme = useTheme()
  return (
    <Container>
      <Content {...rest}>
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
