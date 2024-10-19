import React, { Component } from 'react'
import UpdatedComponent from './WithCounter';

 class HoverCounter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
      }
      incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 };
          });
      };
  render() {
    return (
      <div>
         <button onMouseOver={this.incrementCount}> {this.props.name} Hover counter {this.state.count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)
