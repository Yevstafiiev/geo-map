import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Menu extends Component { 
  render () { 
    return (
      <nav class="navbar navbar-dark bg-primary">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
      </nav>
    )
  }
}
export default Menu