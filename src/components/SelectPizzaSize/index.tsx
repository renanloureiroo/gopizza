import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"

import {
  Container,
  Content,
  Indicator,
  IndicatorWrapper,
  Title,
} from "./styles"

type Props = RectButtonProps & {
  title: string
  selected?: boolean
}

export const SelectPizzaSize = ({
  title,
  selected = false,
  ...rest
}: Props) => {
  return (
    <Container {...rest}>
      <Content selected={selected}>
        <IndicatorWrapper selected={selected}>
          <Indicator selected={selected} />
        </IndicatorWrapper>
        <Title>{title}</Title>
      </Content>
    </Container>
  )
}
