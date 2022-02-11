import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

type Props = {
  selected: boolean
}

export const Container = styled(RectButton)`
  flex: 1;
  height: ${RFValue(82)}px;
  max-width: 31%;
`

export const Content = styled.View<Props>`
  height: 100%;
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SHAPE};
  border-radius: ${RFValue(8)}px;

  padding: 14px 16px 16px;

  justify-content: space-between;

  background: ${({ theme, selected }) =>
    selected ? theme.COLORS.SUCCESS_50 : "transparent"};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    font-size: ${RFValue(16)}px;
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

export const IndicatorWrapper = styled.View<Props>`
  justify-content: center;
  align-items: center;
  height: ${RFValue(20)}px;
  width: ${RFValue(20)}px;
  padding: ${RFValue(6)}px;

  border-radius: ${RFValue(10)}px;
  border-width: 1px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SECONDARY_900};
`

export const Indicator = styled.View<Props>`
  height: ${RFValue(8)}px;
  width: ${RFValue(8)}px;
  border-radius: ${RFValue(4)}px;

  background: ${({ theme, selected }) =>
    selected ? theme.COLORS.SUCCESS_900 : "transparent"};
`
