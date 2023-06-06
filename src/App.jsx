import React, { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Search } from './Components/Search'
import { useAppContext } from './Components/Context/ContextProvider'
import { Result } from './Components/Result'

function App() {
  
  const { search } = useAppContext();

  return (
    <>
    <Header/>
    <div className="container">
      <Search/>
    {search && (<Result/>)}
    </div>
    </>
  )
}

export default App
