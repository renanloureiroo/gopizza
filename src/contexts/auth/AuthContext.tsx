import React, { createContext, ReactNode, useState } from "react"
import auth from "@react-native-firebase/auth"

interface AuthContextData {
  user: User | null
  signIn: ({}: SignInProps) => Promise<void>
}

interface AuthContextProps {
  children: ReactNode
}

interface SignInProps {
  email: string
  password: string
}

interface User {
  id: string
  email: string
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User | null>(null)

  async function signIn({ email, password }: SignInProps) {
    try {
      const { user } = await auth().signInWithEmailAndPassword(email, password)
      setUser({
        id: user.uid,
        email: user.email,
      })
    } catch (err) {
      throw new Error(err.code)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
