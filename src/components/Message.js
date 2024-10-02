import React, { Component } from 'react'

 class Message extends Component {
    constructor(){
        super()
        this.state ={
            message :"welcome vistor"
        }
    }
   changeMessage = () =>{
        this.setState({
            message : "welcome Ramana"
        })
    }
    
  render() {
    return (
      <div>
         <h2>{this.state.message}</h2>
         <button onClick = {this.changeMessage}>click</button>
      </div>
    )
  }
}

export default Message;