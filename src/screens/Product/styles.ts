import { Button } from "@components/Button"
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
  padding: 0 46px;
  justify-content: space-between;
  align-items: center;

  margin: 32px 0;
`

export const PickImageButton = styled(Button)`
  margin-left: 10px;
`
