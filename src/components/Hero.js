import React from 'react'

const Hero = ({heroname}) => {
    if(heroname === "joker"){
        throw new Error("Not a Hero")
    }
  return (
    <div>{heroname}</div>
  )
}

export default Hero