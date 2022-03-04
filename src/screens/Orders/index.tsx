import { OrderCard } from "@components/OrderCard"
import React, { useEffect, useState } from "react"

import firestore from "@react-native-firebase/firestore"

import { Container, Content, Header, Title } from "./styles"
import { Order } from "@screens/Order"

type Order = {
  id: string
  name: string
  photo_url: string
  desk_number: number
  quantity: number
  status: "pronto" | "preparando" | "entregue"
}

export const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    firestore()
      .collection("orders")
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          const responseData = doc.data() as Order

          const order: Order = {
            id: doc.id,
            name: responseData.name,
            photo_url: responseData.photo_url,
            quantity: responseData.quantity,
            status: responseData.status,
            desk_number: responseData.desk_number,
          }

          return order
        })
        console.log(data)
        setOrders(data)
      })
  }, [])

  return (
    <Container>
      <Header>
        <Title>Pedidos feitos</Title>
      </Header>
      <Content>
        {!!orders &&
          orders.map((order, index) => (
            <OrderCard
              index={index}
              quantity={order.quantity}
              status={order.status}
              desk_number={order.desk_number}
              key={order.id}
              photo_url={order.photo_url}
              name={order.name}
            />
          ))}
      </Content>
    </Container>
  )
}
