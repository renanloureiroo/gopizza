import React, { useEffect, useState } from "react"
import { BackButton } from "@components/BackButton"
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native"
import { OrderNavigationProps } from "src/@types/navigation"
import firestore from "@react-native-firebase/firestore"
import {
  Container,
  Header,
  ProductImage,
  Content,
  Title,
  WrapperBackButton,
  WrapperProductImage,
  WrapperSelect,
  SelectedTitle,
  InputsWrapper,
  Total,
  ContentWrapper,
} from "./styles"

import PizzaImage from "@assets/pizza.png"
import { SelectPizzaSize } from "@components/SelectPizzaSize"
import { InputNumber } from "@components/InputNumber"
import { Button } from "@components/Button"
import { useRoute } from "@react-navigation/native"

type Pizza = {
  id: string
  name: string
  name_insensitive: string
  photo_url: string
  prices_sizes: {
    p: number
    m: number
    g: number
  }
}

export const Order = () => {
  const [size, setSize] = useState<"p" | "m" | "g">("p")
  const [data, setData] = useState<Pizza>({} as Pizza)
  const [fetchData, setFetchData] = useState(false)

  const [price, setPrice] = useState<number>(0)

  const [desk, setDesk] = useState("")
  const [quantity, setQuantity] = useState(1)

  const routes = useRoute()
  const { id } = routes.params as OrderNavigationProps

  const handleSelectSize = (size: "p" | "m" | "g") => {
    setSize(size)
  }

  useEffect(() => {
    if (!fetchData) {
      setFetchData(true)
      firestore()
        .collection("pizzas")
        .doc(id)
        .get()
        .then((response) => {
          const product = response.data() as Pizza
          console.log(product)
          setData(product)
        })
    }

    return () => setFetchData(false)
  }, [])

  useEffect(() => {
    if (!!data.prices_sizes) {
      setPrice(data.prices_sizes[size])
    }
  }, [size, data])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Header>
          <WrapperBackButton>
            <BackButton />
          </WrapperBackButton>
          <WrapperProductImage>
            <ProductImage source={{ uri: data.photo_url }} />
          </WrapperProductImage>
        </Header>

        <ContentWrapper>
          <Content>
            <Title>{data.name}</Title>

            <SelectedTitle>Selecione um tamanho</SelectedTitle>

            <WrapperSelect>
              <SelectPizzaSize
                title="Pequena"
                onPress={() => handleSelectSize("p")}
                selected={size === "p"}
              />
              <SelectPizzaSize
                title="Média"
                onPress={() => handleSelectSize("m")}
                selected={size === "m"}
              />
              <SelectPizzaSize
                title="Grande"
                onPress={() => handleSelectSize("g")}
                selected={size === "g"}
              />
            </WrapperSelect>

            <InputsWrapper>
              <InputNumber
                title="Número da mesa"
                value={desk}
                onChangeText={(value) => setDesk(value)}
              />
              <InputNumber
                title="Quantidade"
                value={String(quantity)}
                onChangeText={(value) => setQuantity(Number(value))}
              />
            </InputsWrapper>

            <Total>Total: {price * quantity}</Total>

            <Button title="Confirmar pedido" type="secondary" />
          </Content>
        </ContentWrapper>
      </Container>
    </TouchableWithoutFeedback>
  )
}
