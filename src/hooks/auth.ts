import { useContext } from "react"
import { AuthContext } from "../contexts/auth/AuthContext"

const useAuth = () => {
  const { user, signIn } = useContext(AuthContext)

  return { user, signIn }
}

export { useAuth }
