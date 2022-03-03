import { OrderCard } from "@components/OrderCard"
import React from "react"

import { Container, Content, Header, Title } from "./styles"

export const Orders = () => {
  return (
    <Container>
      <Header>
        <Title>Pedidos feitos</Title>
      </Header>
      <Content>
        <OrderCard
          status="pronto"
          index={0}
          url="https://github.com/renanloureiroo.png"
        />
        <OrderCard
          status="entregue"
          index={1}
          url="https://github.com/renanloureiroo.png"
        />
        <OrderCard
          status="preparando"
          index={1}
          url="https://github.com/renanloureiroo.png"
        />
        <OrderCard
          status="preparando"
          index={1}
          url="https://github.com/renanloureiroo.png"
        />
        <OrderCard
          status="pronto"
          index={1}
          url="https://github.com/renanloureiroo.png"
        />
      </Content>
    </Container>
  )
}
