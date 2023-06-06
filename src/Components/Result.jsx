import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAppContext } from './Context/ContextProvider';
import { MeaningList } from "./MeaningList";
import { Example } from "./Example";
import { SynonymList } from "./SynonymList";
import { AntonymList } from "./AntonymList";


axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en"

export const Result = () => {

    const { search } = useAppContext();
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async (param) => {
        try{
            setLoading(true)
            const res = await axios(`/${param}`)
            setResponse(res.data);
            setError(null);
        }
        catch(e){
            console.log(e);
            setError(e);
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(search.length){
            fetchData(search);
        }
    }, [search])

    console.log(response);

    if(loading){
        return <h2>Loading...</h2>
    }

    if(error){
        return <p>No Definitions Found.</p>
    }

  return (
    <div className='results'>
    {
        response && (
        <div>
            <h3 className='heading'>Meaning & Definitions:</h3>
            <MeaningList mean={response}/>
            <h3 className='heading'>Example:</h3>
            <Example mean={response}/>
            <h3 className='heading'>Synonym:</h3>
            <SynonymList mean={response}/>
            <h3 className='heading'>Antonym:</h3>
            <AntonymList mean={response}/>
        </div>
        )
    }
    
    </div>
  )
}
