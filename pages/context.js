import React, { ContextType, createContext, useContext, useState, useEffect } from "react";
import Api from "../lib/api/api";

const AppContext = createContext()

function ContextProvider({ children }) {
  let [user, setUser] = useState()
  const api = Api.fromWeb()

  useEffect(() => {
    api.user.get().then((res) => {
      console.log(JSON.stringify(res.data));
      setUser(res.data)
    });
  },[])
  const refreshUser = async () => {
    await api.user.get().then((res) => {
      setUser(res.data)
    });
  }
  const value = {
    user,
    refreshUser
  }

  return user ? <AppContext.Provider value={value}> {children}</AppContext.Provider> : <></>;
}

function useAppContext() {
    return useContext(AppContext)
}

export { AppContext, ContextProvider, useAppContext };
