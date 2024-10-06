import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(){
        super()
        this.state = {
            name : "MadhuraVani"
        }
        console.log("lifeCycleB constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getderivedststeprops')
        return null
    }
    componentDidMount(){
        console.log("LifecycleB componentdidmount")
    }
  render() {
    console.log("LifecycleB render")
    return (
      <div>
        LifecycleA
      </div>
    )
  }
}

export default LifecycleB
