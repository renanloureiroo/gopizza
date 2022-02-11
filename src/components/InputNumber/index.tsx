import React from "react"

import { Container, Input, Title } from "./styles"

type Props = {
  title: string
}

export const InputNumber = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input keyboardType="numeric" />
    </Container>
  )
}
