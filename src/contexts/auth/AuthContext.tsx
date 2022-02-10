import React, { createContext, ReactNode, useEffect, useState } from "react"
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"

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
  name: string
  isAdmin: boolean
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User | null>(null)

  async function signIn({ email, password }: SignInProps) {
    try {
      const { user } = await auth().signInWithEmailAndPassword(email, password)

      const profile = await firestore().collection("users").doc(user.uid).get()

      const { name, isAdmin } = profile.data()

      if (!profile.exists) {
        throw new Error("User not found")
      }

      const userData = {
        id: user.uid,
        email: user.email,
        name,
        isAdmin,
      }
      console.log(userData)
      setUser(userData)
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
