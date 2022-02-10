import React, { useState } from "react"
import { LinearGradient } from "expo-linear-gradient"

import {
  Content,
  Form,
  Photo,
  Subtitle,
  Title,
  PhotoWrapper,
  Container,
} from "./styles"
import { useTheme } from "styled-components/native"

import SignInPhoto from "@assets/images/sign-in-image.png"
import { Input } from "@components/Input"
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native"
import { Button } from "@components/Button"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const theme = useTheme()
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="position" enabled style={{ flex: 1 }}>
        <Container>
          <Content>
            <PhotoWrapper>
              <Photo resizeMode="contain" source={SignInPhoto} />
            </PhotoWrapper>

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
            <Button title="Entrar" loading />
          </Content>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
