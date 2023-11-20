import React, { Component } from 'react'

export default class PropsClassCom extends Component {
    state={name:"SKCET"}
  render() {
    return (
      <div>
        <h1>I am at {this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"Home"})}}>Click me</button>
      </div>
    )
  }
}
