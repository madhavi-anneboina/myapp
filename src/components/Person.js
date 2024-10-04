import React from 'react'

const Person = ({person}) => {
  return (
    <div>
         <div>
            <h1>{person.name}</h1>
            <h1>{person.city}</h1>
            <h1>{person.county}</h1>
            </div>
    </div>
  )
}

export default Person