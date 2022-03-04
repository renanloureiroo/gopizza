import React from "react"

import { Container, Photo, Status, Subtitle, Title } from "./styles"

interface OrderCardProps {
  index: number
  photo_url: string
  status: "pronto" | "preparando" | "entregue"
  name: string
  desk_number: number
  quantity: number
}

export const OrderCard = ({
  index,
  photo_url,
  status,
  name,
  desk_number,
  quantity,
}: OrderCardProps) => {
  return (
    <Container index={index}>
      <Photo source={{ uri: photo_url }} />

      <Title>{name}</Title>
      <Subtitle>
        Mesa {desk_number} . Qnt {quantity}
      </Subtitle>

      <Status status={status}>{status}</Status>
    </Container>
  )
}
