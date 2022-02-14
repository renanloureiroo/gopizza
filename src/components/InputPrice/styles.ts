import { TextInput, TextInputProps } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(12)}px;
  border: 1px solid ${({ theme }) => theme.COLORS.SHAPE};

  margin-bottom: ${RFValue(8)}px;
`
export const Size = styled.View`
  height: ${RFValue(56)}px;
  width: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin-right: ${RFValue(18)}px;
`

export const Label = styled.Text`
  font-size: ${RFValue(14)}px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  `}
`

export const Input = styled(TextInput)`
  flex: 1;
  margin-left: ${RFValue(7)}px;
  font-size: ${RFValue(14)}px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  `}
`
