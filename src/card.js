import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const style = {
    card: { padding:20, margin:"10px 10px 0px 10px", border:"1px solid black"}
}

class SimpleCard extends Component{
    handlechange(event){
        var id=event.target.parentElement.id
        console.log(id)
        window.location="/read?id="+id;

    }
    delete(event){
      var id=this.props.id
      console.log(id)
      window.location="http://localhost:5000/delete/?id="+id

  }
  edit(event){
    var id=this.props.id
    console.log(id)
    window.location="http://localhost:3000/admin/edit/?id="+id

}
    render(){
        return (
            <Card style = {style.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                    {this.props.title}
                </Typography>
                <Button onClick={this.delete.bind(this)}><DeleteIcon/></Button>
                <Button onClick={this.edit.bind(this)}><EditIcon/></Button>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={this.handlechange.bind(this)} id={this.props.id}>Read More</Button>
              </CardActions>
            </Card>
          );
    }
}

export default SimpleCard;