import React, { useRef, useState } from "react"
import { BackButton } from "@components/BackButton"
import { Photo } from "@components/Photo"
import {
  Keyboard,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { TouchableWithoutFeedback } from "react-native"

import * as ImagePicker from "expo-image-picker"

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
  Form,
  InputGroup,
  InputGroupHeader,
  Label,
  MaxCharacters,
} from "./styles"
import { InputPrice } from "@components/InputPrice"
import { Input } from "@components/Input"
import { RFValue } from "react-native-responsive-fontsize"
import { Button } from "@components/Button"

export const Product = () => {
  const [image, setImage] = useState("")

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [smallPrice, setSmallPrice] = useState(0)
  const [mediumPrice, setMediumPrice] = useState(0)
  const [largePrice, setLargePrice] = useState(0)

  const input = useRef<TextInput>(null)

  async function handlePickerImage() {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (status === "granted") {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 4],
        })

        if (result.cancelled === false) {
          setImage(result.uri)
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <Header>
          <BackButton />
          <Title>Cadastrar</Title>
          <TouchableOpacity>
            <DeleteLabel>Deletar</DeleteLabel>
          </TouchableOpacity>
        </Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Upload>
            <Photo uri={image} />
            <PickImageButton title="Carregar" onPress={handlePickerImage} />
          </Upload>

          <Form>
            <InputGroup>
              <Label>Nome</Label>
              <Input
                onSubmitEditing={() => input.current.focus()}
                value={name}
                onChangeText={setName}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupHeader>
                <Label>Descrição</Label>
                <MaxCharacters>Max 60 caracteres</MaxCharacters>
              </InputGroupHeader>
              <Input
                ref={input}
                value={description}
                onChangeText={setDescription}
                multiline
                maxLength={60}
                style={{ height: RFValue(80) }}
              />
            </InputGroup>

            <InputGroup>
              <Label>Tamanhos de preços</Label>
              <InputPrice
                value={String(smallPrice)}
                onChangeText={(value) => setSmallPrice(Number(value))}
                size="P"
              />
              <InputPrice
                value={String(mediumPrice)}
                onChangeText={(value) => setMediumPrice(Number(value))}
                size="M"
              />
              <InputPrice
                value={String(largePrice)}
                onChangeText={(value) => setLargePrice(Number(value))}
                size="G"
              />
            </InputGroup>

            <Button title="Cadastrar pizza" type="secondary" />
          </Form>
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
