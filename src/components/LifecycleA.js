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
  render() {
    console.log("LifecycleA render")
    return (
        <div>
           <div>
          LifecycleA
         
        </div>
        <LifecycleB />
        </div>
      
    )
  }
}

export default LifecycleA
