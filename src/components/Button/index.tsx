import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"
import { useTheme } from "styled-components"

import { Container, Title } from "./styles"

interface Props extends RectButtonProps {
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
