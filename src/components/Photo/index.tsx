import React from "react"

import { Image, Placeholder, PlaceholderTitle } from "./styles"

type Props = {
  uri: string | null
}

export const Photo = ({ uri }: Props) => {
  if (uri) {
    return <Image source={{ uri: uri }} />
  }
  return (
    <Placeholder>
      <PlaceholderTitle>Nenhuma foto{"\n"}carregada</PlaceholderTitle>
    </Placeholder>
  )
}
