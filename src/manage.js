import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import SimpleCard from './card.js';


class Managegrid extends Component {
    render() {
      return (
        <Grid container sm={12}>
            <Grid item sm={4}>
                <SimpleCard title="P&G"></SimpleCard>
            </Grid>
            <Grid item sm={4}>
                <SimpleCard title="McKinley"></SimpleCard>
            </Grid>
        </Grid>
      );
    }
  }
  
  export default Managegrid;