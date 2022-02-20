import React from "react"
import { TextInput, TextInputProps } from "react-native"
import { useTheme } from "styled-components/native"

import { Container, Error, Input, Label, Size } from "./styles"

type Props = TextInputProps & {
  size: string

  error: string
}

export const InputPrice = React.forwardRef<TextInput, Props>((props, ref) => {
  const { size, error, ...rest } = props
  const theme = useTheme()

  return (
    <>
      <Container>
        <Size>
          <Label>{size}</Label>
        </Size>
        <Label>R$</Label>

        <Input
          {...rest}
          ref={ref}
          keyboardType="numeric"
          placeholderTextColor={theme.COLORS.SECONDARY_900}
        />
      </Container>
      {error && <Error>{error}</Error>}
    </>
  )
})
