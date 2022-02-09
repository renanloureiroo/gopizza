import React from "react"
import { LinearGradient } from "expo-linear-gradient"

import { Container, Content, Form, Photo, Title } from "./styles"
import { useTheme } from "styled-components/native"
import { StatusBar } from "expo-status-bar"

import SignInPhoto from "@assets/images/sign-in-image.png"

export const SignIn = () => {
  const theme = useTheme()
  return (
    <Container>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <LinearGradient style={{ flex: 1 }} colors={theme.COLORS.GRADIENT}>
        <Content>
          <Photo resizeMode="contain" source={SignInPhoto} />

          <Form>
            <Title>Login</Title>
          </Form>
        </Content>
      </LinearGradient>
    </Container>
  )
}
