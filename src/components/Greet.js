import React, { Children } from 'react'

const Greet = (props) => {
  console.log(props.Children)
  return (
  
    <div>
       <h1>Hello {props.name} </h1>
        <p>{props.children}</p>
    </div>
  )
}

export default Greet
