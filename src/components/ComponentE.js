import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

 class ComponentE extends Component {
    static contextType = UserContext
  render() {
    return (
      <div>
          <h1> Hello iam coming as context {this.context} </h1>
         <ComponentF />
      </div>
    )
  }
}


export default ComponentE
