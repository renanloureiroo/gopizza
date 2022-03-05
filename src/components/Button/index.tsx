import React from "react"
import { RectButtonProps } from "react-native-gesture-handler"

import { Container, Title, LoadingWrapper } from "./styles"
import LottieView from "lottie-react-native"

import LoadingAnimated from "@assets/loading.json"

type Props = RectButtonProps & {
  type?: "primary" | "secondary"
  title: string
  isLoading?: boolean
}

export const Button = ({
  type = "primary",
  isLoading = false,

  title,
  ...rest
}: Props) => {
  return (
    <Container {...rest} type={type} enabled={isLoading}>
      {isLoading ? (
        <LoadingWrapper>
          <LottieView source={LoadingAnimated} autoPlay loop />
        </LoadingWrapper>
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  )
}
