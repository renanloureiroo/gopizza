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
