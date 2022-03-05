import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

interface Props {
  index: number
}

interface StatusProps {
  status: "pronto" | "preparando" | "entregue"
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ theme, index }) => css`
    ${index % 2 == 0
      ? "border-right-width: 0.5px"
      : "border-left-width: 0.5px"};
    border-color: ${theme.COLORS.SHAPE};
  `}
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-bottom-width: 1px;
`

export const Photo = styled.Image`
  height: ${RFValue(104)}px;
  width: ${RFValue(104)}px;
  border-radius: ${52}px;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-bottom: 11px;
  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TITLE};
  `}
`

export const Subtitle = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-bottom: 16px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_500};
    font-family: ${theme.FONTS.TEXT};
  `}
`

export const Status = styled.Text<StatusProps>`
  font-size: 12px;
  padding: 4px 16px;
  border-radius: 9999px;
  text-transform: capitalize;

  ${({ theme, status }) => css`
    border-width: 1px;
    color: ${status === "preparando"
      ? theme.COLORS.ALERT_800
      : theme.COLORS.TITLE};

    background-color: ${status == "pronto"
      ? theme.COLORS.SUCCESS_900
      : status == "entregue"
      ? theme.COLORS.SECONDARY_900
      : theme.COLORS.ALERT_50};

    border-color: ${status == "pronto"
      ? theme.COLORS.SUCCESS_900
      : status == "entregue"
      ? theme.COLORS.SECONDARY_900
      : theme.COLORS.ALERT_800};
  `}
`
