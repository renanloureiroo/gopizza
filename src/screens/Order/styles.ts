import styled, { css } from "styled-components/native"

import { LinearGradient } from "expo-linear-gradient"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper"

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  width: 100%;
  height: ${RFPercentage(25)}px;
  max-height: ${RFValue(204)}px;

  align-items: center;

  padding: 24px;

  padding-top: ${getStatusBarHeight() + 24}px;
`

export const WrapperBackButton = styled.View`
  align-self: flex-start;
`

export const WrapperProductImage = styled.View`
  width: ${RFPercentage(34)}px;
  height: ${RFPercentage(34)}px;
  bottom: -${RFPercentage(17)}px;

  position: absolute;
`

export const ProductImage = styled.Image.attrs({ resizeMode: "contain" })`
  width: 100%;
  height: 100%;
`

export const ContentWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace(),
  },
})``

export const Content = styled.View`
  align-items: center;
  width: 100%;
  margin-top: ${RFPercentage(17)}px;
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
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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

  margin-bottom: ${RFPercentage(3)}px;
`

export const Total = styled.Text`
  ${({ theme }) => css`
    align-self: flex-end;
    font-family: ${theme.FONTS.TEXT};
    font-size: ${RFValue(14)}px;
    color: ${theme.COLORS.SECONDARY_900};
  `}
`
