import React, { Component } from 'react';
import {TextField, Button} from '@material-ui/core';
import FormUserDetail from './FormUserDetail';

export default class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: ''
        }
    }

    nextStep = () => {
        const {step } = this.state;
        this.setState({step: step + 1})
    }

    prevStep = () => {
        const {step } = this.state;
        this.setState({step: step - 1})
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio};
        switch(step) {
            case 1:
                return (
                    <FormUserDetail 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />)
            case 2:
                return <div><Button variant="contained"  color="primary" onClick={this.nextStep}>NEXT</Button></div>
            case 3:
                return <div><Button variant="contained"  color="primary" onClick={this.nextStep}>Another NEXT</Button></div>
            case 4:
                return <h1>Thank You</h1>
        }
    }
}
