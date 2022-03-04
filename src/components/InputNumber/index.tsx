import React from "react"
import { TextInput, TextInputProps } from "react-native"

import { Container, Input, Title } from "./styles"

type Props = TextInputProps & {
  title: string
}

export const InputNumber = React.forwardRef<TextInput, Props>((props, ref) => {
  const { title, ...rest } = props
  return (
    <Container>
      <Title>{title}</Title>
      <Input {...rest} keyboardType="numeric" />
    </Container>
  )
})
