import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"

import { Container, Title, Loading } from "./styles"

type Props = RectButtonProps & {
  type?: "primary" | "secondary"
  title: string
  loading?: boolean
}

export const Button = ({
  type = "primary",
  loading = false,
  title,
  ...rest
}: Props) => {
  return (
    <Container {...rest} type={type} enabled={!loading}>
      {loading ? <Loading /> : <Title>{title}</Title>}
    </Container>
  )
}
