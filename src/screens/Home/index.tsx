import React from "react"

import {
  Container,
  Emoticon,
  Header,
  LogOut,
  Title,
  TitleWrapper,
} from "./styles"

import EmoticonImage from "@assets/happy.png"

import Icon from "@expo/vector-icons/Feather"
import { useTheme } from "styled-components/native"

export const Home = () => {
  const theme = useTheme()
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Emoticon source={EmoticonImage} />
          <Title>Olá, Admin</Title>

          <LogOut onPress={() => console.log("Clic")}>
            <Icon name="log-out" size={24} color={theme.COLORS.TITLE} />
          </LogOut>
        </TitleWrapper>
      </Header>
    </Container>
  )
}
