import React, { useState } from "react"
import { BackButton } from "@components/BackButton"
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native"

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

export const Product = () => {
  const [size, setSize] = useState<"small" | "medium" | "large" | null>(null)

  const handleSelectSize = (size: "small" | "medium" | "large" | null) => {
    setSize(size)
  }
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
            <ProductImage source={PizzaImage} />
          </WrapperProductImage>
        </Header>

        <ContentWrapper>
          <Content>
            <Title>Margherita</Title>

            <SelectedTitle>Selecione um tamanho</SelectedTitle>

            <WrapperSelect>
              <SelectPizzaSize
                title="Pequena"
                onPress={() => handleSelectSize("small")}
                selected={size === "small"}
              />
              <SelectPizzaSize
                title="Média"
                onPress={() => handleSelectSize("medium")}
                selected={size === "medium"}
              />
              <SelectPizzaSize
                title="Grande"
                onPress={() => handleSelectSize("large")}
                selected={size === "large"}
              />
            </WrapperSelect>

            <InputsWrapper>
              <InputNumber title="Número da mesa" />
              <InputNumber title="Quantidade" />
            </InputsWrapper>

            <Total>Total: R$10,00</Total>

            <Button title="Confirmar pedido" type="secondary" />
          </Content>
        </ContentWrapper>
      </Container>
    </TouchableWithoutFeedback>
  )
}
