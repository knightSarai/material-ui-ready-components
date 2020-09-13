import React, { Component } from 'react'
import {TextField, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
      margin: "1rem"
    },
  };


class FormUserDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange, classes} = this.props;
        return (
            <div>
                <TextField 
                    label="First name" 
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br/>
                <TextField 
                    label="Last name" 
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField 
                    label="Email" 
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br/>
                <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.button}
                    onClick={this.continue}
                    >
                    Continue</Button>
            </div>
        )
    }
}

export default withStyles(styles)(FormUserDetail);