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
import { TouchableWithoutFeedback, Alert } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import firestore from "@react-native-firebase/firestore"
import storage from "@react-native-firebase/storage"

import { useRoute } from "@react-navigation/native"
import { ProductNavigationProps } from "src/@types/navigation"

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

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório!"),
  description: yup.string().required("Descrição é obrigatória!"),
  smallPrice: yup
    .number()
    .positive("Não pode ser um valor negativo!")
    .required("Preço é obrigatório!"),
  mediumPrice: yup
    .number()
    .positive("Não pode ser um valor negativo!")
    .required("Preço é obrigatório!"),
  largePrice: yup
    .number()
    .positive("Não pode ser um valor negativo!")
    .required("Preço é obrigatório!"),
})

type FormData = {
  name: string
  description: string
  smallPrice: number
  mediumPrice: number
  largePrice: number
}

export const Product = () => {
  const [image, setImage] = useState("")

  const [isLoading, setIsLoading] = useState(false)

  const inputDescription = useRef<TextInput>(null)
  const inputSmall = useRef<TextInput>(null)
  const inputMedium = useRef<TextInput>(null)
  const inputLarge = useRef<TextInput>(null)

  const theme = useTheme()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const route = useRoute()
  const { id } = route as ProductNavigationProps

  const handleAdd = async (form: FormData) => {
    setIsLoading(true)
    try {
      if (!image) return

      const fileName = new Date().getTime()
      const reference = storage().ref(`/pizzas/${fileName}.png`)

      await reference.putFile(image)
      const photo_url = await reference.getDownloadURL()

      const newPizza = {
        name: form.name,
        name_insensitive: form.name.toLowerCase().trim(),
        description: form.description,
        prices_sizes: {
          p: form.smallPrice,
          m: form.mediumPrice,
          g: form.largePrice,
        },
        photo_url,
        photo_path: reference.fullPath,
      }

      await firestore().collection("pizzas").add(newPizza)

      Alert.alert("Cadastro", "Pizza cadastrada com sucesso.")
    } catch (err) {
      Alert.alert("Cadastro", "Não foi possível cadastrar a pizza.")
    } finally {
      reset()
      setImage("")
      setIsLoading(false)
    }
  }

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
                error={errors.smallPrice && errors.smallPrice.message}
                name="smallPrice"
                control={control}
                ref={inputSmall}
                onSubmitEditing={() => inputMedium.current.focus()}
                blurOnSubmit={false}
                size="P"
              />
              <InputPrice
                error={errors.mediumPrice && errors.mediumPrice.message}
                name="mediumPrice"
                control={control}
                ref={inputMedium}
                onSubmitEditing={() => inputLarge.current.focus()}
                blurOnSubmit={false}
                size="M"
              />
              <InputPrice
                error={errors.largePrice && errors.largePrice.message}
                name="largePrice"
                control={control}
                ref={inputLarge}
                size="G"
              />
            </InputGroup>

            <Button
              title="Cadastrar pizza"
              type="secondary"
              isLoading={isLoading}
              onPress={() => handleSubmit(handleAdd)()}
            />
          </Form>
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
