import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = {
    card: { padding:20, margin:"10px 10px 0px 10px", border:"1px solid black"}
}

class SimpleCard extends Component{
    handlechange(event){
        var id=event.target.parentElement.id
        console.log(id)
        window.location="/page?id="+id;

    }
    render(){
        var id_company=this.props.title
        return (
            <Card style = {style.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    {this.props.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={this.handlechange.bind(this)} id={id_company}>Read More</Button>
              </CardActions>
            </Card>
          );
    }
}

export default SimpleCard;