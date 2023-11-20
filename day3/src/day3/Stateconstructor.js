import React, { Component } from 'react'

export default class Stateconstructor extends Component {
    constructor()
    {
        super();
        this.state=({name: "SKCET" ,place:"CBE"})
    }
    changecollege(){
        this.setState({name:"PSG"})
    }
  render() {
    return (
      <div>
        <h1>I am studying at {this.state.name} place {this.state.place}</h1>
        <button onClick={this.changecollege.bind(this)}>Click me</button>
      </div>
    )
  }
}
