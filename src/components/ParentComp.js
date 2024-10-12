import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

 class ParentComp extends Component {
    constructor(){
        super()
        this.state= {
            name : "madhavi"
        }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:"madhavi"
            })
        },2000)
    }

  render() {
    return (
      <div>
        {/* <RegularComp name={this.state.name} />
        <PureComp  name={this.state.name}/> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
