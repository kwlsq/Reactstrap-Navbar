import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './Pages/Home';
import notHome from './Pages/notHome';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route path='/' component={Home} exact/>
        <Route path='/not-home' component={notHome}/>
      </div>
    )
  }
}

export default App;
