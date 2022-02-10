import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"

import { Container, Title } from "./styles"

interface Props extends RectButtonProps {
  type?: "primary" | "secondary"
  title: string
}

export const Button = ({ type = "primary", title, ...rest }: Props) => {
  return (
    <Container {...rest} type={type}>
      <Title>{title}</Title>
    </Container>
  )
}
