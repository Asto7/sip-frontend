import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './home.js';
import Api from './api.js';
import Edit from './edit.js';
import Add from './admin-add.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/home"   component= {Home}/>
        <Route path="/read" component = {Api}/>
        <Route path="/home/admin" component = {Add}/>
        <Route path="/admin/edit" component = {Edit}/>

      </Router>
    );
  }
}

export default App;

