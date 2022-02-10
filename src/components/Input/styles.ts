import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(8)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  border-radius: ${RFValue(12)}px;

  margin-bottom: ${RFValue(16)}px;
`
export const InputText = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px; ;
`

export const VisibilityButton = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-items: center;
`
