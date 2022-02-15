import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  max-height: ${RFValue(104)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  height: 100%;
  min-width: 25%;
  max-width: 25%;
`

export const Content = styled.View`
  height: 100%;
  padding: ${RFValue(18)}px 0;
  flex: 1;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-bottom: ${RFValue(8)}px;

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
