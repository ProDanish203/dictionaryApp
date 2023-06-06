import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();

export const ContextProvider = ({children}) => {

    const [search, setSearch] = useState("")

  return (
    <AppContext.Provider value={
      {
        search, 
        setSearch
      }
    }>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
