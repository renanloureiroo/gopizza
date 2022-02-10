import React, { createContext, ReactNode, useEffect, useState } from "react"
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"

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

const USER_COLLECTION = "@gopizza:users"

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User | null>(null)

  const [isStarted, setIsStarted] = useState(false)

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
      await AsyncStorage.setItem("@gopizza:user", JSON.stringify(userData))

      setUser(userData)
    } catch (err) {
      throw new Error(err.code)
    }
  }

  useEffect(() => {
    setIsStarted(true)
    const rehydrated = async () => {
      if (isStarted) {
        const userData = await AsyncStorage.getItem(USER_COLLECTION)

        if (userData) {
          const userFormatted = JSON.parse(userData) as User

          setUser(userFormatted)
        }
      }
    }

    rehydrated()

    return () => setIsStarted(false)
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
