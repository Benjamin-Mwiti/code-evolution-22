import React, { Component } from 'react'
import UserContext from '../useContext'
import ComponentF from './componentF'

class ComponentE extends Component {
    static contextType = UserContext
  render() {
    return (
      <div>
          Component E context {this.context}
          <ComponentF />
      </div>
    )
  }
}

// ComponentE.contextType = UserContext;

export default ComponentE