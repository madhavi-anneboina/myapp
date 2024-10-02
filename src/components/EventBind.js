import React, { Component } from 'react'

class EventBind extends Component {
  constructor(){
    super()
     this.state  = {
        message : "Hello"
     }
  }

 clickHandler = () =>{
    this.setState({
        message : "welcome"
    })
}
  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
         <button onClick= {this.clickHandler}>Event Bind click</button>
      </div>
    )
  }
}

export default EventBind
