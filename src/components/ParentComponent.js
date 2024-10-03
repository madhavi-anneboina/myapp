import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
         message : "i am coming from parent"
      }
    }

    handleMethod = () =>{
        alert(`Hello ${this.state.message}`)
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


