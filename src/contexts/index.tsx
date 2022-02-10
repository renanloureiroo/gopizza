import React, { ReactNode } from "react"
import { ToastProvider } from "react-native-styled-toast"

import theme from "../theme"
import { ThemeProvider } from "styled-components/native"
import { AuthProvider } from "./auth/AuthContext"

type Props = {
  children: ReactNode
}

const AppProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  )
}

export { AppProvider }
