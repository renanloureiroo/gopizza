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

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

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
import { useTheme } from "styled-components/native"
import { useForm } from "react-hook-form"

interface FormData {
  name: string
  description: string
}

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório."),
  description: yup.string().required("Descrição é obrigatória."),
})

export const Product = () => {
  const [image, setImage] = useState("")

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [smallPrice, setSmallPrice] = useState("")
  const [mediumPrice, setMediumPrice] = useState("")
  const [largePrice, setLargePrice] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const inputDescription = useRef<TextInput>(null)
  const inputSmall = useRef<TextInput>(null)
  const inputMedium = useRef<TextInput>(null)
  const inputLarge = useRef<TextInput>(null)

  const theme = useTheme()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  async function handleAdd(formData: FormData) {
    console.log(formData)
  }

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
                error={errors.name && errors.name.message}
                name="name"
                control={control}
                style={{ color: theme.COLORS.SECONDARY_900 }}
                onSubmitEditing={() => inputDescription.current.focus()}
                blurOnSubmit={false}
              />
            </InputGroup>
            <InputGroup>
              <InputGroupHeader>
                <Label>Descrição</Label>
                <MaxCharacters>Max 60 caracteres</MaxCharacters>
              </InputGroupHeader>
              <Input
                error={errors.description && errors.description.message}
                name="description"
                control={control}
                ref={inputDescription}
                blurOnSubmit={false}
                onSubmitEditing={() => inputSmall.current.focus()}
                multiline
                maxLength={60}
                style={{
                  height: RFValue(80),
                  color: theme.COLORS.SECONDARY_900,
                }}
              />
            </InputGroup>

            <InputGroup>
              <Label>Tamanhos de preços</Label>
              <InputPrice
                ref={inputSmall}
                onSubmitEditing={() => inputMedium.current.focus()}
                blurOnSubmit={false}
                value={smallPrice}
                onChangeText={setSmallPrice}
                size="P"
              />
              <InputPrice
                ref={inputMedium}
                onSubmitEditing={() => inputLarge.current.focus()}
                blurOnSubmit={false}
                value={mediumPrice}
                onChangeText={setMediumPrice}
                size="M"
              />
              <InputPrice
                ref={inputLarge}
                value={largePrice}
                onChangeText={setLargePrice}
                size="G"
              />
            </InputGroup>

            <Button
              title="Cadastrar pizza"
              type="secondary"
              isLoading={isLoading}
              onPress={handleSubmit(handleAdd)}
            />
          </Form>
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
