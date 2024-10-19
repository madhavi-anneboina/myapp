import React, { Component } from "react";
import UpdatedComponent from "./WithCounter";

class ClickCounter extends Component {
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
        <button onClick={this.incrementCount}> {this.props.name}Clicked {this.state.count} times</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);
