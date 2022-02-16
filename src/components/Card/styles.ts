import { RectButton } from "react-native-gesture-handler"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  width: 100%;
`
export const Content = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`

export const Image = styled.Image`
  width: ${RFValue(104)}px;
  height: ${RFValue(104)}px;

  border-radius: ${RFValue(52)}px;
  margin-right: ${RFValue(20)}px;
`

export const Details = styled.View`
  flex: 1;
`

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Name = styled.Text`
  flex: 1;
  font-size: ${RFValue(20)}px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_900};
    font-family: ${theme.FONTS.TITLE};
  `}
`

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;

  ${({ theme }) => css`
    color: ${theme.COLORS.SECONDARY_500};
    font-family: ${theme.FONTS.TEXT};
  `}
`

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin: ${RFValue(12)}px 0;

  margin-left: ${RFValue(124)}px;
`
