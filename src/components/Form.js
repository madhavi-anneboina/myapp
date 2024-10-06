import React, { Component } from 'react'

 class Form extends Component {
    constructor(){
     super()
     this.state={
        username:'',
        comments:'',
        topic:'react'
     }
    }
  chageHandler = (event) =>{
    this.setState({
        username :event.target.value,
       
    })
  }
  handleCommentChange = (event) =>{
    this.setState({
        comments :event.target.value,
       
    })
  }
  chageSelector = (event) =>{
    this.setState({
        topic:this.state.value
    })
  }
  render() {
    return (
      <div>
        <div>
         <lable>UserName</lable>
         <input type="text" value={this.state.username} onChange={this.chageHandler}/>
         </div>
         <div>
            <lable>Comments</lable>
            <textarea value={this.state.comments} onChange={this.handleCommentChange}> </textarea>
         </div>
         <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange = {this.chageSelector}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
         </div>
      </div>

    )
  }
}
export default Form;

