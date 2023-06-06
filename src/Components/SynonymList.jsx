import React from 'react'

export const SynonymList = ({ mean }) => {
  return (
    <div style={{ margin: "10px 0 20px"}}>
    {
      mean.map((val) => (
        val.meanings.map((means, index) => (
          
          means.synonyms?.map((syn, idx) => (
                <span>{syn}, </span>
          ))
        ))
        )
        )
    }
    </div>
  )
}
