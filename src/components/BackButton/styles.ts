import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled(RectButton)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(12)}px;
`

export const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  border-width: 1px;
  border-radius: ${RFValue(12)}px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  justify-content: center;
  align-items: center;
`
