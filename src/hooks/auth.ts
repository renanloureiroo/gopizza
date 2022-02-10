import { useContext } from "react"
import { AuthContext } from "src/contexts/AuthContext"

const useAuth = () => {
  const { user, signIn } = useContext(AuthContext)

  return { user, signIn }
}

export { useAuth }
