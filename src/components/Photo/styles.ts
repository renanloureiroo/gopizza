import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

export const Image = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;

  border-radius: ${RFValue(80)}px;
`

export const Placeholder = styled.View`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  justify-content: center;
  align-items: center;

  border-radius: ${RFValue(80)}px;

  border: 1px dashed ${({ theme }) => theme.COLORS.SECONDARY_900};
`

export const PlaceholderTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  text-align: center;
  line-height: ${RFValue(22)}px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`
