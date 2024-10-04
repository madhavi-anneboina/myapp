import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
         message : "i am coming from parent"
      }
    }

    handleMethod = (method) =>{
        alert(`Hello ${this.state.message} ${method}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent handleMethod = {this.handleMethod} />
      </div>
    )
  }
}

export default ParentComponent


