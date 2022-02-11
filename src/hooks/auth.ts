import { useContext } from "react"
import { AuthContext } from "../contexts/auth/AuthContext"

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export { useAuth }
