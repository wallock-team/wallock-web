import { useRouter } from 'next/dist/client/router'
import React, {
  ContextType,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import Api from '../lib/api/api'

const AppContext = createContext()

function ContextProvider({ children }) {
  let [user, setUser] = useState()
  const api = Api.fromWeb()
  let route = useRouter()

  useEffect(() => {
    console.log("in useEffect");
    refreshUser()
  }, [])

  const refreshUser = async () => {
    try {
      let response = await api.user.get()
      setUser(response.data)
    } catch (err) {
      if (err.response.status === 401) {
        route.push('/login')
      } else alert(err.message)
    }
  }

  const value = {
    user,
    refreshUser,
  }

  return <AppContext.Provider value={value}> {children}</AppContext.Provider>
}

function useAppContext() {
  return useContext(AppContext)
}

export { AppContext, ContextProvider, useAppContext }
