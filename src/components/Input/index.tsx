import React, { useState } from "react"
import { TextInputProps } from "react-native"
import { useTheme } from "styled-components/native"

import Icon from "@expo/vector-icons/MaterialIcons"

import { Container, InputText, VisibilityButton } from "./styles"

interface Props extends TextInputProps {
  type?: "email" | "password"
}

export const Input = ({ type = "email", ...rest }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const theme = useTheme()
  return (
    <Container>
      <InputText
        {...rest}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={theme.COLORS.TITLE}
        secureTextEntry={!isVisible}
      />
      {type === "password" && (
        <VisibilityButton onPress={toggleVisibility}>
          <Icon
            name={!!isVisible ? "visibility" : "visibility-off"}
            size={24}
            color={theme.COLORS.TITLE}
          />
        </VisibilityButton>
      )}
    </Container>
  )
}
