import React, { Component } from 'react'

import withCounter from './WithCounter';

 class HoverCounter extends Component {
 
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
         <button onMouseOver={incrementCount}>  Hover counter {count} times</button>
      </div>
    )
  }
}

export default withCounter(HoverCounter)
