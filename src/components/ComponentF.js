import React, { Component } from 'react'
import { UserConsumer } from './userContext'

 class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {(user) =>{
              return <h1>helloo iam coming from provider a {user}</h1>
            }
            }
        </UserConsumer>
       
      </div>
    )
  }
}

export default ComponentF
