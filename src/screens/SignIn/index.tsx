import React, { useState } from "react"

import {
  Form,
  Photo,
  Subtitle,
  Title,
  PhotoWrapper,
  Container,
  Content,
} from "./styles"

import BrandImage from "@assets/brand.png"
import { Input } from "@components/Input"
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native"
import { Button } from "@components/Button"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          enabled
          style={{ flex: 1 }}
        >
          <PhotoWrapper>
            <Photo resizeMode="contain" source={BrandImage} />
          </PhotoWrapper>
          <Content>
            <Form>
              <Title>Login</Title>
              <Input
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
              />
              <Input
                placeholder="Senha"
                type="password"
                value={password}
                onChangeText={setPassword}
              />

              <Subtitle>Esqueci minha senha</Subtitle>
            </Form>
            <Button title="Entrar" />
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
