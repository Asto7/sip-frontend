import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './home.js';
import Tabbar from './tabs.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/home"   component= {Home}/>
        <Route path="/page" component = {Tabbar}/>

      </Router>
    );
  }
}

export default App;

