import firestore from "@react-native-firebase/firestore"
import React from "react"

import { Container, Photo, Status, Subtitle, Title } from "./styles"

interface OrderCardProps {
  index: number
  data: {
    id: string
    photo_url: string
    status: "pronto" | "preparando" | "entregue"
    name: string
    desk_number: number
    quantity: number
  }
}

export const OrderCard = ({ index, data }: OrderCardProps) => {
  const handleState = () => {
    if (data.status === "pronto") {
      firestore()
        .collection("orders")
        .doc(data.id)
        .update({ status: "entregue" })
    }
  }

  return (
    <Container index={index} onPress={handleState}>
      <Photo source={{ uri: data.photo_url }} />

      <Title>{data.name}</Title>
      <Subtitle>
        Mesa {data.desk_number} - Qnt {data.quantity}
      </Subtitle>

      <Status status={data.status}>{data.status}</Status>
    </Container>
  )
}
