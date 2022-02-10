import React, { useState } from "react"
import { useToast } from "react-native-styled-toast"

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

  const { signIn } = useAuth()
  const { toast } = useToast()

  const handleSignIn = async () => {
    try {
      if (!email || !password) return
      setLoading(true)
      await signIn({ email, password })
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
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

              <ForgotPasswordButton>
                <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
              </ForgotPasswordButton>
            </Form>
            <Button title="Entrar" onPress={handleSignIn} isLoading={loading} />
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
