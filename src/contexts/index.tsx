import React, { ReactNode } from "react"

import theme from "../theme"
import { ThemeProvider } from "styled-components/native"
import { AuthProvider } from "./auth/AuthContext"

type Props = {
  children: ReactNode
}

const AppProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}

export { AppProvider }
