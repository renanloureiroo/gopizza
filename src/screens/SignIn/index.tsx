import React, { useState } from "react"
import { LinearGradient } from "expo-linear-gradient"

import { Content, Form, Photo, Subtitle, Title } from "./styles"
import { useTheme } from "styled-components/native"
import { StatusBar } from "expo-status-bar"

import SignInPhoto from "@assets/images/sign-in-image.png"
import { Input } from "@components/Input"
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const theme = useTheme()
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient style={{ flex: 1 }} colors={theme.COLORS.GRADIENT}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <KeyboardAvoidingView behavior="position" enabled style={{ flex: 1 }}>
          <Content>
            <Photo resizeMode="contain" source={SignInPhoto} />

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
          </Content>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}
