import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import SimpleCard from './card.js';


class Techgrid extends Component {
    render() {
      return (
        <Grid container sm={12}>
            <Grid item sm={4}>
                <SimpleCard title="Google"></SimpleCard>
            </Grid>
            <Grid item sm={4}>
                <SimpleCard title="Amazon"></SimpleCard>
            </Grid>
        </Grid>
      );
    }
  }
  
  export default Techgrid;