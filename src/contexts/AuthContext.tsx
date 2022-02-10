import React, { createContext, ReactNode } from "react"

interface AuthContextData {}

interface AuthContextProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthContextProps) => {
  return (
    <AuthContext.Provider value={{} as AuthContextData}>
      {children}
    </AuthContext.Provider>
  )
}
