import { getStatusBarHeight } from "react-native-iphone-x-helper"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Content = styled.View`
  padding: 0 32px;
  align-items: center;
`

export const Photo = styled.Image`
  margin-top: ${getStatusBarHeight() + 50}px;
  width: 100%;
  height: ${RFPercentage(45)}px;
`

export const Form = styled.View`
  width: 100%;
  margin-top: 10px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: ${RFValue(32)}px;

  margin-bottom: ${RFValue(23)}px;
`
export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;
  align-self: flex-end;
`
