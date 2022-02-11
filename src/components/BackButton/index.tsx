import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"
import Icon from "@expo/vector-icons/Entypo"

import { Container, Wrapper } from "./styles"
import { useTheme } from "styled-components/native"

type BackButtonProps = RectButtonProps & {}

export const BackButton = ({ ...rest }: BackButtonProps) => {
  const theme = useTheme()
  return (
    <Container {...rest}>
      <Wrapper>
        <Icon name="chevron-small-left" size={32} color={theme.COLORS.TITLE} />
      </Wrapper>
    </Container>
  )
}
