import React, { Component } from 'react'

 class Welcome extends Component {
  render() {
    const {name, heroName} = this.props
    return (
      <div>
         <h2>Welcome to class components {name} and {heroName}</h2>
      </div>
    )
  }
}

export default Welcome;

