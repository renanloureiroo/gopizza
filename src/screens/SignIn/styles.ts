import { LinearGradient } from "expo-linear-gradient"
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"

import styled, { css } from "styled-components/native"

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  flex: 1;
  justify-content: center;
`

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  ContentContainerStyle: {
    paddingBottom: getBottomSpace() + RFPercentage(3),
  },
})`
  width: 100%;
  padding: 0px 32px;
`

export const PhotoWrapper = styled.View`
  height: ${RFPercentage(50)}px;
  padding-top: ${getStatusBarHeight() + 50}px;
`

export const Photo = styled.Image`
  width: 100%;
  height: 100%;
`

export const Form = styled.View`
  width: 100%;
  margin-top: 10px;
`

export const Title = styled.Text`
  font-size: ${RFPercentage(5)}px;
  margin-bottom: ${RFValue(24)}px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};
  `}
`
export const Subtitle = styled.Text`
  font-size: ${RFValue(12)}px;
  align-self: flex-end;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};
  `}
`
