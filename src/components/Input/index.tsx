import React, { useState, Ref, useEffect } from "react"
import { TextInput, TextInputProps } from "react-native"
import { useTheme } from "styled-components/native"

import Icon from "@expo/vector-icons/MaterialIcons"

import { Container, Error, InputText, VisibilityButton } from "./styles"
import { RFPercentage } from "react-native-responsive-fontsize"

interface Props extends TextInputProps {
  type?: "email" | "password"
  themeInput?: "dark" | "light"

  error?: string
}

export const Input = React.forwardRef<TextInput, Props>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false)

  const {
    type = "email",
    themeInput = "dark",
    error,
    defaultValue,
    ...rest
  } = props

  const toggleVisibility = () => setIsVisible(!isVisible)

  const theme = useTheme()

  return (
    <>
      <Container>
        <InputText
          {...rest}
          ref={ref}
          secureTextEntry={type !== "email" && !isVisible}
          themeInput={themeInput}
        />
        {type === "password" && (
          <VisibilityButton onPress={toggleVisibility}>
            <Icon
              name={isVisible ? "visibility" : "visibility-off"}
              size={RFPercentage(3.5)}
              color={theme.COLORS.PRIMARY_50}
            />
          </VisibilityButton>
        )}
      </Container>
      {error && <Error>{error}</Error>}
    </>
  )
})
