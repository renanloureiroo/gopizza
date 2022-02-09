import React from "react"
import { TouchableOpacityProps } from "react-native"
import { useTheme } from "styled-components"

import { Container, Title } from "./styles"

interface Props extends TouchableOpacityProps {
  backgroundColor?: string
  title: string
}

export const Button = ({ backgroundColor, title, ...rest }: Props) => {
  const theme = useTheme()
  return (
    <Container
      {...rest}
      backgroundColor={
        !!backgroundColor ? backgroundColor : theme.COLORS.PRIMARY_800
      }
    >
      <Title>{title}</Title>
    </Container>
  )
}