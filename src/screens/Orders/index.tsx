import { OrderCard } from "@components/OrderCard"
import React, { useEffect, useState } from "react"

import firestore from "@react-native-firebase/firestore"

import { Container, Content, Header, Title } from "./styles"
import { Order } from "@screens/Order"
import { useAuth } from "@hooks/auth"

type Order = {
  id: string
  name: string
  water_id: string
  photo_url: string
  desk_number: number
  quantity: number
  status: "pronto" | "preparando" | "entregue"
}

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const { user } = useAuth()

  useEffect(() => {
    const subscriber = firestore()
      .collection("orders")
      .where("water_id", "==", user.id)
      .onSnapshot((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          } as Order
        })

        setOrders(data)
      })

    return () => subscriber()
  }, [])

  return (
    <Container>
      <Header>
        <Title>Pedidos feitos</Title>
      </Header>
      <Content>
        {!!orders &&
          orders.map((order, index) => (
            <OrderCard key={order.id} data={order} index={index} />
          ))}
      </Content>
    </Container>
  )
}
