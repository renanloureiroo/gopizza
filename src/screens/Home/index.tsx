import React, { useState, useCallback } from "react"
import firestore from "@react-native-firebase/firestore"

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
import { Card, Pizza } from "@components/Card"
import { Button } from "@components/Button"
import { FlatList, TouchableOpacity } from "react-native"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { useAuth } from "@hooks/auth"

export const Home = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([])
  const [search, setSearch] = useState("")

  const { signOut, user } = useAuth()
  const theme = useTheme()
  const { navigate } = useNavigation()

  const handleClear = () => {
    setSearch("")
    fetchPizzas("")
  }
  const handleSearch = () => {
    fetchPizzas(search)
  }

  const handleOpen = (id: string) => {
    navigate("product", { id })
  }

  const handleNewPizza = () => {
    navigate("product", {})
  }

  const fetchPizzas = (value: string) => {
    const formattedValue = value.toLowerCase().trim()
    try {
      firestore()
        .collection("pizzas")
        .orderBy("name_insensitive")
        .startAt(formattedValue)
        .endAt(`${formattedValue}\uf8ff`)
        .get()
        .then((response) => {
          const data = response.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          }) as Pizza[]
          console.log(data)
          setPizzas(data)
        })
    } catch (err) {
      console.log(err)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchPizzas("")
    }, [])
  )

  return (
    <Container>
      <Header>
        <Greeting>
          <Emoticon source={EmoticonImage} />
          <Title>Olá, Admin</Title>

          <TouchableOpacity style={{ marginLeft: "auto" }} onPress={signOut}>
            <Icon name="logout" size={24} color={theme.COLORS.TITLE} />
          </TouchableOpacity>
        </Greeting>
        <SearchWrapper>
          <Search
            value={search}
            onChangeText={setSearch}
            onClear={handleClear}
            onSearch={handleSearch}
          />
        </SearchWrapper>
      </Header>
      <Content>
        <Menu>
          <MenuTitle>Cardápio</MenuTitle>
          <MenuCount>
            {pizzas.length == 1
              ? `${pizzas.length} pizza`
              : `${pizzas.length} pizzas`}
          </MenuCount>
        </Menu>
        <FlatList
          data={pizzas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card data={item} onPress={() => handleOpen(item.id)} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
      {user.isAdmin && (
        <Footer>
          <Button title="Cadastrar pizza" onPress={handleNewPizza} />
        </Footer>
      )}
    </Container>
  )
}
