import { createContext, useState } from 'react'
import firebase from '../lib/firebase'
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
// import 

const provider = new GithubAuthProvider();
const auth = getAuth()


const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const signin = () => {
    try {
      setLoading(true)
      signInWithPopup(auth, provider)
        .then(res => {
          setUser(res.user)
          Router.push('/dashboard')
        }).catch(error => {
          console.log(error)
        })

   
    } finally {
      setLoading(false)
    }
  }
  const signout = () => {

    try {
      Router.push('/')
      return firebase
        .auth()
        .signOut()
        .then(() => setUser(false))
    } finally {
      setLoading(false)
    }

  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signin,
        signout
      }}
    >
      {children}
    </AuthContext.Provider>
  )

}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext
