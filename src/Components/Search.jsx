import React, { useState } from 'react'
import { useAppContext } from './Context/ContextProvider';

export const Search = () => {

    const [value, setvalue] = useState("")
    
    const { search, setSearch } = useAppContext()

    const handleSubmit = () => {
        setSearch(value);
        setvalue("");
    }

    const handleSubmitKey = (e) => {
        if(e.key === "Enter"){
            setSearch(value);
            setvalue("")
        }
    }

  return (
    <>
    <div className='searchBox'>
        <input type="text" placeholder='search' className='search' value={value} onChange={(e) => setvalue(e.target.value) } onKeyDown={handleSubmitKey}/>
        <button className='btn' onClick={handleSubmit} >Search</button>
    </div>
    {
        search && (
            <h3 className='resultfor'>Result for: <span>{search}</span></h3>
        )
    }
    </>
  )
}
