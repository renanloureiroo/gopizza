import React, { useEffect, useState } from "react"
import { BackButton } from "@components/BackButton"
import {
  Alert,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native"
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
import { useNavigation, useRoute } from "@react-navigation/native"
import { useAuth } from "@hooks/auth"

type Pizza = {
  id: string
  name: string

  name_insensitive: string
  photo_url: string
  prices_sizes: {
    [key: string]: number
  }
}

export const Order = () => {
  const [size, setSize] = useState<"p" | "m" | "g">("p")
  const [data, setData] = useState<Pizza>({} as Pizza)
  const [fetchData, setFetchData] = useState(false)
  const [loading, setLoading] = useState(false)

  const [desk, setDesk] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { user } = useAuth()

  const amount: string = !!data.id
    ? String(data.prices_sizes[size] * quantity)
    : "0.00"

  const routes = useRoute()
  const { id } = routes.params as OrderNavigationProps

  const { navigate, goBack } = useNavigation()

  const handleSelectSize = (size: "p" | "m" | "g") => {
    setSize(size)
  }

  const handleNewOrder = async () => {
    try {
      setLoading(true)
      if (!desk) {
        throw new Error("Adicione o número da mesa!")
      }
      const order = {
        desk_number: desk,
        water_id: user.id,
        quantity,
        amount: Number(amount) * 100,
        photo_url: data.photo_url,
        name: data.name,
        pizza_id: data.id,
        created_at: firestore.FieldValue.serverTimestamp(),
        status: "preparando",
      }

      await firestore().collection("orders").add(order)

      navigate("home")
    } catch (err) {
      if (err.message === "Adicione o número da mesa!") {
        Alert.alert(err.message)
      } else {
        Alert.alert("Não foi possível concluir o pedido!")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      if (!fetchData) {
        setFetchData(true)
        firestore()
          .collection("pizzas")
          .doc(id)
          .get()
          .then((response) => {
            const product = response.data() as Pizza

            setData({ id: response.id, ...product })
          })
      }
    }

    return () => setFetchData(false)
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Header>
          <WrapperBackButton>
            <BackButton onPress={() => goBack()} />
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
                value={String(desk)}
                onChangeText={(value) => setDesk(Number(value))}
              />
              <InputNumber
                title="Quantidade"
                value={String(quantity)}
                onChangeText={(value) => setQuantity(Number(value))}
              />
            </InputsWrapper>

            <Total>Total: R$ {amount}</Total>

            <Button
              title="Confirmar pedido"
              type="secondary"
              isLoading={loading}
              onPress={handleNewOrder}
            />
          </Content>
        </ContentWrapper>
      </Container>
    </TouchableWithoutFeedback>
  )
}
