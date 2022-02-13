import { BackButton } from "@components/BackButton"
import { Photo } from "@components/Photo"
import React from "react"
import { Keyboard, Platform, TouchableOpacity } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

import { Container, Header, Title, DeleteLabel } from "./styles"

export const Product = () => {
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined} enabled>
      <Header>
        <BackButton />
        <Title>Cadastrar</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>

      <Photo uri="https://github.com/renanloureiroo.png" />
    </Container>
    // </TouchableWithoutFeedback>
  )
}
