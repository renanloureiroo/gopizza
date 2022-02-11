import React from "react"
import { BackButton } from "@components/BackButton"
import { Platform } from "react-native"

import { Container, Header } from "./styles"

export const Product = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined} enabled>
      <Header>
        <BackButton />
      </Header>
    </Container>
  )
}
