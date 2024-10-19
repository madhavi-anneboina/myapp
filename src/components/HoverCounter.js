import React, { Component } from 'react'
import UpdatedComponent from './WithCounter';

 class HoverCounter extends Component {
 
  render() {
    return (
      <div>
         <button onMouseOver={this.props.incrementCount}>  Hover counter {this.props.count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)
