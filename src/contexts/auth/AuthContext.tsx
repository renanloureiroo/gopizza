import React, { createContext, ReactNode, useEffect, useState } from "react"
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"

interface AuthContextData {
  user: User | null
  signIn: ({}: SignInProps) => Promise<void>
  signOut: () => Promise<void>
  forgetPassword: (email: string) => Promise<void>
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
      
      await AsyncStorage.setItem("@gopizza:user", JSON.stringify(userData))

      setUser(userData)
    } catch (err) {
      throw new Error(err.code)
    }
  }

  async function signOut() {
    try {
      await auth().signOut()
      await AsyncStorage.removeItem(USER_COLLECTION)
      setUser(null)
    } catch (err) {
      throw new Error(err)
    }
  }

  async function forgetPassword(email: string) {
    try {
      auth().sendPasswordResetEmail(email)
    } catch (err) {
      throw new Error(err)
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
    <AuthContext.Provider value={{ signIn, signOut, forgetPassword, user }}>
      {children}
    </AuthContext.Provider>
  )
}
