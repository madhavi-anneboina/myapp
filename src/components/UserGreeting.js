import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn : true
        }
    }
  render() {

   return this.state.isLoggedIn && <h1>welcome mad</h1>
    // return (
    //   <div>
         
    //      {/* {this.state.isLoggedIn ? 
    //     <h1>Hello Madhavi</h1> :
    //     <h1>Hello Madhura</h1>
    //      } */}
    //   </div>
    // )
  }
}

export default UserGreeting

