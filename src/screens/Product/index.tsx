import React, { useState } from "react"
import { BackButton } from "@components/BackButton"
import { Platform } from "react-native"

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
} from "./styles"

import PizzaImage from "@assets/pizza.png"
import { SelectPizzaSize } from "@components/SelectPizzaSize"
import { InputNumber } from "@components/InputNumber"

export const Product = () => {
  const [size, setSize] = useState<"small" | "medium" | "large" | null>(null)

  const handleSelectSize = (size: "small" | "medium" | "large" | null) => {
    setSize(size)
  }
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined} enabled>
      <Header>
        <WrapperBackButton>
          <BackButton />
        </WrapperBackButton>
        <WrapperProductImage>
          <ProductImage source={PizzaImage} />
        </WrapperProductImage>
      </Header>

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
      </Content>
    </Container>
  )
}
