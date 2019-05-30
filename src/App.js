import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import MapForm from './components/MapForm'
import About from './pages/about'
class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container" style={{ marginTop: '150px' }}>
          <Switch>
            <Route path='/' component={MapForm} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
