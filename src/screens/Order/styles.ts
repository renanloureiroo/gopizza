import styled, { css } from "styled-components/native"

import { LinearGradient } from "expo-linear-gradient"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper"

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};

  padding-bottom: ${getBottomSpace()}px;
`

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  padding: ${getStatusBarHeight() + RFValue(34)}px 24px 0;
`

export const ProductImage = styled.Image.attrs({ resizeMode: "contain" })`
  width: ${RFValue(240)}px;
  height: ${RFValue(240)}px;

  border-radius: ${RFValue(120)}px;
  align-self: center;

  top: -${RFValue(120)}px;
`

export const Content = styled.View`
  /* margin-top: -${RFValue(120)}px; */
  padding: 0 24px;

  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    font-size: ${RFValue(32)}px;
    color: ${theme.COLORS.SECONDARY_900};
    margin-bottom: ${RFPercentage(5)}px;
  `}
`
export const WrapperSelect = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${RFPercentage(5)}px;
`

export const SelectedTitle = styled.Text`
  ${({ theme }) => css`
    align-self: flex-start;
    font-family: ${theme.FONTS.TEXT};
    font-size: ${RFValue(14)}px;
    color: ${theme.COLORS.SECONDARY_900};

    margin-bottom: 16px;
  `}
`

export const InputsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`

export const Total = styled.Text`
  ${({ theme }) => css`
    align-self: flex-end;
    font-family: ${theme.FONTS.TEXT};
    font-size: ${RFValue(14)}px;
    color: ${theme.COLORS.SECONDARY_900};
  `}
`
