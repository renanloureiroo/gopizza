import { LinearGradient } from "expo-linear-gradient"
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper"
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
  justify-content: flex-end;
`

export const Greeting = styled.View`
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

export const SearchWrapper = styled.View`
  width: 100%;
  min-height: ${RFValue(48)}px;

  bottom: -${RFValue(24)}px;
`

export const Menu = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(50)}px 0 ${RFValue(22)}px 0;

  margin-bottom: ${RFValue(20)}px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`

export const MenuTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`

export const MenuCount = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(24)}px;
`

export const Footer = styled.View`
  width: 100%;
  padding: 0 24px;
  height: ${RFValue(72) + getBottomSpace()}px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};

  align-items: center;
  justify-content: center;
`
