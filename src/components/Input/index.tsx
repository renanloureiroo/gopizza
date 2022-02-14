import React, { useState, Ref } from "react"
import { TextInput, TextInputProps } from "react-native"
import { useTheme } from "styled-components/native"

import Icon from "@expo/vector-icons/MaterialIcons"

import { Container, InputText, VisibilityButton } from "./styles"
import { RFPercentage } from "react-native-responsive-fontsize"

interface Props extends TextInputProps {
  type?: "email" | "password"
  themeInput?: "dark" | "light"
}

export const Input = ({
  type = "email",
  themeInput = "dark",

  ...rest
}: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const theme = useTheme()
  return (
    <Container>
      <InputText
        {...rest}
        secureTextEntry={type !== "email" || isVisible}
        themeInput={themeInput}
      />
      {type === "password" && (
        <VisibilityButton onPress={toggleVisibility}>
          <Icon
            name={!!isVisible ? "visibility" : "visibility-off"}
            size={RFPercentage(3.5)}
            color={theme.COLORS.PRIMARY_50}
          />
        </VisibilityButton>
      )}
    </Container>
  )
}
