import React, { Component } from 'react'
import Encomponent from './Encomponent'

class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.inc}>click me {this.props.count}</button>
      </div>
    )
  }
}
export default Encomponent(ClickCounter)
