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
    shouldComponentUpdate(){
        console.log("LifecycleB should component update")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate")
    }
    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate")
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
