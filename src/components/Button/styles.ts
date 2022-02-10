import styled from "styled-components/native"
import { RectButton } from "react-native-gesture-handler"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"

import { Circle } from "react-native-progress"

interface Props {
  type: "primary" | "secondary"
}

export const Container = styled(RectButton)<Props>`
  background: ${({ type, theme }) =>
    type === "primary" ? theme.COLORS.PRIMARY_800 : theme.COLORS.PRIMARY_900};

  flex: 1;
  max-height: ${RFPercentage(8)}px;
  min-height: ${RFPercentage(8)}px;
  border-radius: ${RFValue(12)}px;

  justify-content: center;
  align-items: center;

  padding: 0 20px;

  margin: 20px 0;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.Inter};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`

export const Loading = styled(Circle).attrs(({ theme }) => ({
  size: RFValue(14),
  color: theme.COLORS.TITLE,
  indeterminate: true,
}))``
