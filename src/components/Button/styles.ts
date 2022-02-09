import { TouchableOpacity } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

interface Props {
  backgroundColor: string
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: ${RFValue(56)}px;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${RFValue(12)}px;

  justify-content: center;
  align-items: center;

  margin: 20px 0;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`
