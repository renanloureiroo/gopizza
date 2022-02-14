import { TextInput } from "react-native"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

type InputProps = {
  themeInput: "dark" | "light"
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: ${RFValue(12)}px;

  margin-bottom: ${RFValue(5)}px;
`
export const InputText = styled(TextInput).attrs<InputProps>(
  ({ theme, themeInput }) => {
    return {
      autoCapitalize: "none",
      autoCorrect: false,
      placeholderTextColor:
        themeInput === "dark"
          ? theme.COLORS.PRIMARY_50
          : theme.COLORS.SECONDARY_900,
    }
  }
)<InputProps>`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;
  height: ${RFValue(56)}px;

  background: transparent;
`

export const VisibilityButton = styled.TouchableOpacity`
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
`
export const Error = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-left: ${RFValue(10)}px;

  ${({ theme }) => css`
    color: ${theme.COLORS.PRIMARY_100};
    font-family: ${theme.FONTS.TEXT};
  `}
`
