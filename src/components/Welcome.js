import React, { Component } from 'react'

 class Welcome extends Component {
  render() {
    return (
      <div>
         <h2>Welcome to class components {this.props.name}</h2>
      </div>
    )
  }
}

export default Welcome;

