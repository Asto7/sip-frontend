import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import SimpleCard from './card.js';
import axios from 'axios';
import _ from 'lodash';


class Allgrid extends Component {
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
        var companies = _.get(this.state, 'companies');
        console.log(companies)
        if(this.props.type==="all"){
        return (
            <Grid container sm={12}>
                {companies.map((company)=>
                    <Grid item sm={4}>
                    <SimpleCard title={company.name}></SimpleCard>
                    </Grid>
                )}
            </Grid>
          );
        }
        else if(this.props.type==="technical"){
            return (
                <Grid container sm={12}>
                    {companies.map((company)=> company.type === "technical" ? (
                        <Grid item sm={4}>
                        <SimpleCard title={company.name}></SimpleCard>
                        </Grid>
                        ) :(null)
                        
                    )}
                </Grid>
        );}
        else{
            return (
                <Grid container sm={12}>
                    {companies.map((company)=> company.type === "management" ? (
                        <Grid item sm={4}>
                        <SimpleCard title={company.name}></SimpleCard>
                        </Grid>
                        ) :(null)
                        
                    )}
                </Grid>
        );}
    }
  }
  
  export default Allgrid;