import React, { useRef } from "react"

import {
  ClearButton,
  Container,
  Input,
  InputWrapper,
  SearchButton,
} from "./styles"

import Icon from "@expo/vector-icons/MaterialIcons"
import Lupa from "@expo/vector-icons/Entypo"
import { TextInputProps } from "react-native"
import { useTheme } from "styled-components/native"
import { RectButtonProps } from "react-native-gesture-handler"

type Props = RectButtonProps &
  TextInputProps & {
    onClear: () => void
    onSearch: () => void
  }

export const Search = ({ value, onChangeText, onClear, onSearch }: Props) => {
  const theme = useTheme()

  return (
    <Container>
      <InputWrapper>
        <Input value={value} onChangeText={onChangeText} />
        <ClearButton onPress={onClear}>
          <Icon name="close" size={16} />
        </ClearButton>
      </InputWrapper>
      <SearchButton onPress={onSearch}>
        <Lupa name="magnifying-glass" size={24} color={theme.COLORS.TITLE} />
      </SearchButton>
    </Container>
  )
}
