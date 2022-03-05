import React, { useState } from "react"
import Toast from "react-native-toast-message"

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
import { useAuth } from "@hooks/auth"

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)

  const { signIn, forgetPassword } = useAuth()

  const handleSignIn = async () => {
    try {
      setLoading(true)
      if (!email || !password) return
      await signIn({ email, password })
    } catch (err) {
      setLoading(false)
      console.log(err.message)
      if (
        err.message === "auth/invalid-email" ||
        err.message === "auth/wrong-password"
      ) {
        Toast.show({
          type: "error",
          text1: "Email ou senha inválidos!",
          text2: "Por favor, verifique as credenciais e tente novamente.",
        })
        console.log("Email inválido")
      }

      if (
        err.message === "auth/user-not-found" ||
        err.message === "User not found"
      ) {
        Toast.show({
          type: "error",
          text1: "Usuário não encontrado!",
          text2: "Nenhum usuário corresponde ao email informado.",
        })

        if (err.message === "auth/user-disabled") {
          Toast.show({
            type: "error",
            text1: "Usuário desativado",
            text2: "A conta referente a email informado foi desativado.",
          })
        }
      }
    }
  }

  const handleForgetPassword = async () => {
    try {
      if (!email) throw new Error("Missing email!")
      await forgetPassword(email)
    } catch (err) {
      console.log(err)
    }
  }

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

              <ForgotPasswordButton onPress={handleForgetPassword}>
                <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
              </ForgotPasswordButton>
            </Form>
            <Button
              title="Entrar"
              onPress={handleSignIn}
              isLoading={!loading}
            />
          </Content>
          <Toast />
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
