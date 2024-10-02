import React, { useState } from 'react'

const FunctionClick = () => {
    const [name,setName] = useState("Madhavi")
   const  clickHandler = () =>{
        setName("Vnaii")
     }
   
  return (
    <div>
        <h1> {name}</h1>  
        <button onClick= {clickHandler}> click Me </button>
    </div>
  ) 
}


export default FunctionClick
