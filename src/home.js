import React, { Component } from 'react';
import Appbar from './appbar.js';
import Tabbar from './tabs.js';


class Home extends Component {
  render() {
    return (
        <div>
            <Appbar></Appbar>
            <Tabbar></Tabbar>
      </div>
    );
  }
}

export default Home;

