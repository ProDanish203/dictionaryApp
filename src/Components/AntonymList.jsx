import React from 'react'

export const AntonymList = ({ mean }) => {

  console.log(mean)

  return (
    <div style={{ margin: "10px 0 20px"}}>
    {
      mean.map((val) => (
        val.meanings.map((means, index) => (
          
          means.antonyms?.map((ant, idx) => (
                <span>{ant}, </span>
          ))
        ))
        )
        )
    }
    </div>
  )
}
