import styled from "styled-components/native"

import { LinearGradient } from "expo-linear-gradient"
import { RFPercentage } from "react-native-responsive-fontsize"

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  width: 100%;
  height: ${RFPercentage(25)}px;

  align-items: center;
  justify-content: center;
`
