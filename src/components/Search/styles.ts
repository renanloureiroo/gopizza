import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  max-height: ${RFValue(48)}px;
  flex-direction: row;
  align-items: center;
`
export const InputWrapper = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: row;
  background: ${({ theme }) => theme.COLORS.TITLE};
  border-radius: ${RFValue(16)}px;

  padding: 0 ${RFValue(6)}px;
  align-items: center;
`
export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: ${RFValue(14)}px;
  padding: 0 ${RFValue(14)}px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TEXT};
  `}
`

export const ClearButton = styled.TouchableOpacity``

export const SearchButton = styled(RectButton)`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;

  background: ${({ theme }) => theme.COLORS.SUCCESS_900};
  border-radius: ${RFValue(12)}px;

  margin-left: ${RFValue(7)}px;

  align-items: center;
  justify-content: center;
`
