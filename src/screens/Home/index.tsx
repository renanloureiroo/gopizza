import React, { useState } from "react"

import {
  Container,
  Content,
  Emoticon,
  Footer,
  Header,
  SearchWrapper,
  Title,
  Greeting,
  Menu,
  MenuTitle,
  MenuCount,
} from "./styles"

import EmoticonImage from "@assets/happy.png"

import Icon from "@expo/vector-icons/MaterialIcons"
import { useTheme } from "styled-components/native"
import { Search } from "@components/Search"
import { Card } from "@components/Card"
import { Button } from "@components/Button"
import { ScrollView, TouchableOpacity } from "react-native"

export const Home = () => {
  const [search, setSearch] = useState("")
  const handleClear = () => {
    setSearch("")
  }
  const theme = useTheme()
  return (
    <Container>
      <Header>
        <Greeting>
          <Emoticon source={EmoticonImage} />
          <Title>Olá, Admin</Title>

          <TouchableOpacity
            style={{ marginLeft: "auto" }}
            onPress={() => console.log("Clic")}
          >
            <Icon name="logout" size={24} color={theme.COLORS.TITLE} />
          </TouchableOpacity>
        </Greeting>
        <SearchWrapper>
          <Search
            value={search}
            onChangeText={setSearch}
            onClear={handleClear}
            onSearch={() => {}}
          />
        </SearchWrapper>
      </Header>
      <Content>
        <Menu>
          <MenuTitle>Cardápio</MenuTitle>
          <MenuCount>32 pizzas</MenuCount>
        </Menu>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </Content>
      <Footer>
        <Button title="Cadastrar pizza" />
      </Footer>
    </Container>
  )
}
