import { LinearGradient } from "expo-linear-gradient"
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper"
import { RFValue } from "react-native-responsive-fontsize"
import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  padding: ${getStatusBarHeight() + 33}px 0 33px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;

  ${({ theme }) => css`
    color: ${theme.COLORS.TITLE};
    font-family: ${theme.FONTS.TITLE};
  `}
`

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace(),
    flexDirection: "row",
    flexWrap: "wrap",
  },
})``
