import { LinearGradient } from "expo-linear-gradient"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"

import styled from "styled-components/native"

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  height: 100%;
  justify-content: center;
  padding: 0 32px;
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
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: ${RFPercentage(5)}px;

  margin-bottom: ${RFValue(23)}px;
`
export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(12)}px;
  align-self: flex-end;
`
