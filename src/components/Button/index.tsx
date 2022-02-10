import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"

import { Container, Title, Loading } from "./styles"

type Props = RectButtonProps & {
  type?: "primary" | "secondary"
  title: string
  isLoading?: boolean
}

export const Button = ({
  type = "primary",
  isLoading = false,
  title,
  ...rest
}: Props) => {
  return (
    <Container {...rest} type={type} enabled={!isLoading}>
      {isLoading ? <Loading /> : <Title>{title}</Title>}
    </Container>
  )
}
