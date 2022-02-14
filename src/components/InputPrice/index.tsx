import React from "react"
import { TextInput, TextInputProps } from "react-native"
import { useTheme } from "styled-components/native"

import { Container, Input, Label, Size } from "./styles"

type Props = TextInputProps & {
  size: string
}

export const InputPrice = ({ size, ...rest }: Props) => {
  const theme = useTheme()
  return (
    <Container>
      <Size>
        <Label>{size}</Label>
      </Size>
      <Label>R$</Label>
      <Input
        {...rest}
        keyboardType="numeric"
        placeholderTextColor={theme.COLORS.SECONDARY_900}
      />
    </Container>
  )
}
