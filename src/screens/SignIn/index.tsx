import React, { useState } from "react"

import {
  Form,
  Brand,
  ForgotPasswordButton,
  Title,
  BrandWrapper,
  Container,
  Content,
  ForgotPasswordLabel,
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
          <Content>
            <BrandWrapper>
              <Brand source={BrandImage} />
            </BrandWrapper>

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

              <ForgotPasswordButton>
                <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
              </ForgotPasswordButton>
            </Form>
            <Button title="Entrar" />
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
