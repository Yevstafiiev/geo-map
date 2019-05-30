import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    response: '',
    errors: {},
    loading: false,
    done: false
  }

  render () {
    document.title = 'Login'

    return (
      <div>
          some login form
      </div>
    )
  }
}

export default Login
