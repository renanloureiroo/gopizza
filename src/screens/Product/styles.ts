import { Button } from "@components/Button"
import { Input } from "@components/Input"
import { LinearGradient } from "expo-linear-gradient"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize"

import styled, { css } from "styled-components/native"

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${getStatusBarHeight() + 25}px 24px 23px 24px;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};
    font-size: ${RFValue(24)}px;
  `}
`

export const DeleteLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TEXT};
    font-size: ${RFValue(14)}px;
  `}
`

export const Upload = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 42px;
  justify-content: center;
  align-items: center;

  margin: 32px 0;
`

export const PickImageButton = styled(Button)`
  margin-left: 10px;
`

export const Form = styled.View`
  width: 100%;
  padding: 0 24px;
`

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-bottom: ${RFValue(11)}px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(17)}px;
`

export const InputGroupHeader = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const MaxCharacters = styled.Text`
  font-size: ${RFValue(10)}px;
  margin-bottom: ${RFValue(12)}px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`
