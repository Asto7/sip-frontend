import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import SimpleCard from './card.js';
import companies from './store.js';


class Techgrid extends Component {
    render() {
      return (
        <Grid container sm={12}>
            {companies.map((company)=> company.type === "technical" ? (
                <Grid item sm={4}>
                <SimpleCard title={company.title}></SimpleCard>
                </Grid>
                ) :(null)
                
            )}
        </Grid>
      );
    }
  }
  
  export default Techgrid;