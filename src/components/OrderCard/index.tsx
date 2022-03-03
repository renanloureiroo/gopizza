import React from "react"

import { Container, Photo, Status, Subtitle, Title } from "./styles"

interface OrderCardProps {
  index: number
  url: string
  status: "pronto" | "preparando" | "entregue"
}

export const OrderCard = ({ index, url, status }: OrderCardProps) => {
  return (
    <Container index={index}>
      <Photo source={{ uri: "https://github.com/renanloureiroo.png" }} />

      <Title>4 Queijos</Title>
      <Subtitle>Mesa 01 . Qnt 1</Subtitle>

      <Status status={status}>Pronto</Status>
    </Container>
  )
}
