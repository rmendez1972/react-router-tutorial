import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos sub menu</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
