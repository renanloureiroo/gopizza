import React from "react"

import Icon from "@expo/vector-icons/Entypo"

import { Container } from "./styles"
import { useTheme } from "styled-components/native"
import { TouchableOpacityProps } from "react-native"

type BackButtonProps = TouchableOpacityProps & {}

export const BackButton = ({ ...rest }: BackButtonProps) => {
  const theme = useTheme()
  return (
    <Container {...rest}>
      <Icon name="chevron-small-left" size={32} color={theme.COLORS.TITLE} />
    </Container>
  )
}
