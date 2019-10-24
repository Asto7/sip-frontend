import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            companies: [],
            name:'',
            type:''
        }
    }
    async componentDidMount() {
        var url_string = window.location.href
        var url = new URL(url_string);
        var id = url.searchParams.get("id");

        const res = await axios('http://localhost:5000/id?id='+id) ;
        let companies =res.data[0];
        this.setState({companies:companies});
        var company = _.get(this.state, 'companies')
        this.setState({type:company.type});
        this.setState({name:company.name});
    }
    update(event){
        var param = event.target.name
        this.setState({[param]: event.target.value});
    }
    render(){
        var company = _.get(this.state, 'companies')
        const inputProps1 = {
            name: "name",
            value: this.state.name
        }
        const inputProps2 = {
            name: "type",
            value: this.state.type
        }
        return(
            <form action ="http://localhost:5000/edit" method="POST">
                <input type="text" name="id" value={company.id} hidden/>
                <TextField  inputProps = {inputProps1} id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
                <TextField inputProps = {inputProps2}  id="outlined-search" type="search" margin="normal" variant="outlined" onChange={this.update.bind(this)}/><br/>
                <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>
            </form>
        )
    }
}
  
  
  export default Edit;