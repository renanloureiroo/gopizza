import React, { useEffect, useRef, useState } from "react"
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
import { RFValue } from "react-native-responsive-fontsize"
import { useTheme } from "styled-components/native"
// import { useForm } from "react-hook-form"
import { Formik } from "formik"

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

import { Pizza } from "@components/Card"

import { InputPrice } from "@components/InputPrice"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { Photo } from "@components/Photo"
import { BackButton } from "@components/BackButton"
import { string } from "yup/lib/locale"
import { ProductImage } from "@screens/Order/styles"

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
  image: string
}

export const Product = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [initialValues, setInitialValues] = useState<FormData>({
    name: "",
    description: "",
    smallPrice: 0,
    mediumPrice: 0,
    largePrice: 0,
    image: "",
  })
  const [image, setImage] = useState("")

  const inputDescription = useRef<TextInput>(null)
  const inputSmall = useRef<TextInput>(null)
  const inputMedium = useRef<TextInput>(null)
  const inputLarge = useRef<TextInput>(null)

  const theme = useTheme()

  const route = useRoute()
  const { id } = route.params as ProductNavigationProps

  const handleAdd = async (form: FormData) => {
    setIsLoading(true)
    try {
      console.log(form)

      // if (!image) return

      // const fileName = new Date().getTime()
      // const reference = storage().ref(`/pizzas/${fileName}.png`)

      // await reference.putFile(image)
      // const photo_url = await reference.getDownloadURL()

      // const newPizza = {
      //   name: form.name,
      //   name_insensitive: form.name.toLowerCase().trim(),
      //   description: form.description,
      //   prices_sizes: {
      //     p: form.smallPrice,
      //     m: form.mediumPrice,
      //     g: form.largePrice,
      //   },
      //   photo_url,
      //   photo_path: reference.fullPath,
      // }

      // await firestore().collection("pizzas").add(newPizza)

      Alert.alert("Cadastro", "Pizza cadastrada com sucesso.")
    } catch (err) {
      Alert.alert("Cadastro", "Não foi possível cadastrar a pizza.")
    } finally {
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

  useEffect(() => {
    if (id) {
      firestore()
        .collection("pizzas")
        .doc(id)
        .get()
        .then((response) => {
          const product = response.data() as Pizza
          console.log(product)

          setInitialValues({
            name: product.name,
            description: product.description,
            image: product.photo_url,
            smallPrice: product.prices_sizes.p,
            mediumPrice: product.prices_sizes.m,
            largePrice: product.prices_sizes.g,
          })
          setImage(product.photo_url)
        })
    }
  }, [id])

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

          <Formik
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
            validationSchema={schema}
            enableReinitialize
          >
            {({ handleChange, submitForm, values, errors, touched }) => (
              <Form>
                <InputGroup>
                  <Label>Nome</Label>
                  <Input
                    error={!!errors.name && errors.name}
                    value={values.name}
                    onChangeText={handleChange("name")}
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
                    error={!!errors.description && errors.description}
                    value={values.description}
                    onChangeText={handleChange("description")}
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
                    error={!!errors.smallPrice && errors.smallPrice}
                    ref={inputSmall}
                    value={String(values.smallPrice)}
                    onChangeText={handleChange("smallPrice")}
                    onSubmitEditing={() => inputMedium.current.focus()}
                    blurOnSubmit={false}
                    size="P"
                  />
                  <InputPrice
                    value={String(values.mediumPrice)}
                    onChangeText={handleChange("mediumPrice")}
                    error={!!errors.mediumPrice && errors.mediumPrice}
                    ref={inputMedium}
                    onSubmitEditing={() => inputLarge.current.focus()}
                    blurOnSubmit={false}
                    size="M"
                  />
                  <InputPrice
                    value={String(values.largePrice)}
                    onChangeText={handleChange("largePrice")}
                    error={!!errors.largePrice && errors.largePrice}
                    ref={inputLarge}
                    size="G"
                  />
                </InputGroup>

                <Button
                  title="Cadastrar pizza"
                  type="secondary"
                  isLoading={isLoading}
                  onPress={submitForm}
                />
              </Form>
            )}
          </Formik>
        </ScrollView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
