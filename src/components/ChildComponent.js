import React from 'react'

const ChildComponent = ({handleMethod}) => {
  return (
    
    <div>
        <button onClick = {()=>handleMethod("Helloooo")}>Child Component </button>
    </div>
  )
}

export default ChildComponent
