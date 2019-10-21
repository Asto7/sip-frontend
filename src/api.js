import React from 'react';
import axios from 'axios';
import _ from 'lodash';

class Api extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        companies: []
      }
}

  async componentDidMount() {
    const res = await axios('http://localhost:5000/data') ;
    let companies =res.data;
    this.setState({companies:companies});
  }

  render() {
    console.log(_.get(this.state, 'companies'));
    return (
      <ul>
        
      </ul>
    )
  }
}

export default Api;