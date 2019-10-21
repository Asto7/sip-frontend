import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './home.js';
import Api from './api.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/home"   component= {Home}/>
        <Route path="/page" component = {Api}/>

      </Router>
    );
  }
}

export default App;

