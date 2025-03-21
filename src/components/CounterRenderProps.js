import React, { Component } from 'react';
import ClickCounterTwo from './ClickCounterTwo';
import HoverCounterTwo from './HoverCounterTwo';


 class CounterRenderProps extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
      }
      incrementCount = () =>{
          this.setState(prevState =>{
            return {count : prevState.count + 1}
          })
       }
  render() {
    return (
      <div>
         {this.props.children(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default CounterRenderProps
