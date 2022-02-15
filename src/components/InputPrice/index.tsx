import React from "react"
import { Controller, Control } from "react-hook-form"
import { TextInput, TextInputProps } from "react-native"
import { useTheme } from "styled-components/native"

import { Container, Error, Input, Label, Size } from "./styles"

type Props = TextInputProps & {
  size: string
  name: string
  control: Control
  error: string
}

export const InputPrice = React.forwardRef<TextInput, Props>((props, ref) => {
  const { size, name, control, error, ...rest } = props
  const theme = useTheme()

  return (
    <>
      <Container>
        <Size>
          <Label>{size}</Label>
        </Size>
        <Label>R$</Label>
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              {...rest}
              value={value}
              onChangeText={onChange}
              ref={ref}
              keyboardType="numeric"
              placeholderTextColor={theme.COLORS.SECONDARY_900}
            />
          )}
        />
      </Container>
      {error && <Error>{error}</Error>}
    </>
  )
})
