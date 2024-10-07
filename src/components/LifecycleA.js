import React, { Component } from 'react';
import LifecycleB from './LifecycleB';




class LifecycleA extends Component {
    constructor(){
        super()
        this.state = {
            name : "Madhavi"
        }
        console.log("lifeCycleA constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getderivedststeprops')
        return null
    }
    componentDidMount(){
        console.log("LifecycleA componentdidmount")
    }
    shouldComponentUpdate(){
        console.log("LifecycleA should component update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")
    }
    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }
    chageState = () =>{
        this.setState({name:'codevolution'})
    }
  render() {
    console.log("LifecycleA render")
    return (
        <div>
           <div>
          LifecycleA
          {this.state.name}
          <button onClick={this.chageState}>Change State</button>
        </div>
        <LifecycleB />
        </div>
      
    )
  }
}

export default LifecycleA
