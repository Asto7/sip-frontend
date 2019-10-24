import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        }
    
    render(){
        const inputProps1 = {
            name: "name"
        }
        const inputProps2 = {
            name: "type"
        }
        return(
            <form action ="http://localhost:5000/add" method="POST">
                <TextField  inputProps = {inputProps1} id="outlined-search" label="Name" type="search" margin="normal" variant="outlined"/><br/>
                <TextField inputProps = {inputProps2}  id="outlined-search" label="Type" type="search" margin="normal" variant="outlined"/><br/>
                <Button type="submit" variant="contained" startIcon={<SaveIcon />}> Save </Button>
            </form>
        )
    }
}

export default Form;