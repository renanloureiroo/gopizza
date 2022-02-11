import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  max-width: 48%;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    font-size: ${RFValue(14)}px;
    color: ${theme.COLORS.SECONDARY_900};
    margin-bottom: 16px;
  `}
`
export const Input = styled.TextInput`
  width: 100%;
  height: ${RFPercentage(8)}px;

  border-width: 1px;
  border-radius: ${RFValue(8)}px;
  border-color: ${({ theme }) => theme.COLORS.SHAPE};
  background: ${({ theme }) => theme.COLORS.TITLE};
  text-align: center;

  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(16)}px;
`
