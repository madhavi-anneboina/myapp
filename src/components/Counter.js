import React, { Component } from 'react'

 class Counter extends Component {
    constructor(){
        super()
        this.state= {
            count : 0
        }
    }

    updateCount = () => {
        this.setState({
         count : this.state.count + 1
        },()=> console.log('call back vale',this.state.count))
        console.log(this.state.count)
    }
  render() {
    return (
      <div>
          <h1> count : {this.state.count}</h1>
           <button onClick = {this.updateCount}>Click Me</button>
      </div>
    )
  }
}

export default Counter
