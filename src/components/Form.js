import React, { Component } from 'react'

 class Form extends Component {
    constructor(){
     super()
     this.state={
        username:''
     }
    }
  chageHandler = (event) =>{
    this.setState({username :event.target.value})
  }
  render() {
    return (
      <div>
         <lable>UserName</lable>
         <input type="text" value={this.state.username} onChange={this.chageHandler}/>
      </div>
    )
  }
}
export default Form;

