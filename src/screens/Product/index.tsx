import React, { useState } from "react"
import { BackButton } from "@components/BackButton"
import { Photo } from "@components/Photo"
import { Keyboard, Platform, TouchableOpacity } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

import * as ImagePicker from "expo-image-picker"

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
} from "./styles"

export const Product = () => {
  const [image, setImage] = useState("")

  async function handlePickerImage() {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (status === "granted") {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined} enabled>
      <Header>
        <BackButton />
        <Title>Cadastrar</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>

      <Upload>
        <Photo uri="" />
        <PickImageButton title="Carregar" onPress={handlePickerImage} />
      </Upload>
    </Container>
    // </TouchableWithoutFeedback>
  )
}
