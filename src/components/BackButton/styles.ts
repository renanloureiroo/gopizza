import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.TouchableOpacity`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(12)}px;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_100};
`
