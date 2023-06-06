import React from 'react'

export const Example = ({ mean }) => {
  
  return (
    <div style={{ margin: "10px 0 20px"}}>
    {
      mean.map((val) => (
        val.meanings.map((means, index) => (
          
          means.definitions.map((def, idx) => (
            <div className='res-list' key={idx}>
              {def.example && (
                <li>{def.example}</li>
              )}
            </div>
          ))
        ))
        )
        )
    }
    </div>
  )
}
