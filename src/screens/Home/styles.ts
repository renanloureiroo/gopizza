import { LinearGradient } from "expo-linear-gradient"
import { BorderlessButton } from "react-native-gesture-handler"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
`

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  width: 100%;
  height: ${RFValue(149)}px;
  padding: 0 24px;
  padding-top: ${getStatusBarHeight() + 30}px;
`

export const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Emoticon = styled.Image`
  height: ${RFValue(32)}px;
  width: ${RFValue(32)}px;
`

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-left: ${RFValue(12)}px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};
  `}
`
export const LogOut = styled(BorderlessButton)`
  margin-left: auto;
`
