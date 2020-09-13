import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AppBarMain from './appBars/AppBarMain';
import UserForm from './stepperForm/UserForm'
import { MainProvider } from '../context/main.context';
import About from './About';
import Home from './Home'

import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container } from '@material-ui/core';


const useStyles = makeStyles({
    paper: {
        height: "100vh",
    },
    container: {
        marginTop: "1rem",
        textAlign: "center"
    }
})

export default function App() {
    const classes = useStyles();
    
    return (
        <MainProvider>
            <Paper className={classes.paper} square >
                <AppBarMain/>
                <Container className={classes.container} maxWidth='lg'>
                    <Switch>
                        <Route exact from="/" render={props => <Home {...props}/>}/>
                        <Route exact from="/about" render={props => <About {...props}/>}/>
                        <Route exact from="/userform" render={props => <UserForm {...props}/>}/>
                    </Switch>
                </Container>
            </Paper>
        </MainProvider>
        
    )
}
