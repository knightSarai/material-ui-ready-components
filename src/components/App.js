import React from 'react';
import AppBarMain from './appBars/AppBarMain';
import useToggleContext from '../hooks/useToggleState';
import About from './About';
import Home from './Home'
import {Route, Switch} from 'react-router-dom';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Paper, Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        height: "100vh",
    },
    container: {
        marginTop: "1rem"
    }
})

export default function App() {
    const classes = useStyles();
    const [isDarkMode, toggleTheme] = useToggleContext(false);
    const theme = createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light" ,
          primary: {
            main: isDarkMode? '#283149' : "#f73859",
          },
          secondary: {
            light: isDarkMode? '#f85f73' : "#4791db",
            main: isDarkMode?"#f73859" : "#1976d2",
          },
          },
      });
    return (
        <ThemeProvider theme={theme}>
            <Paper className={classes.paper} square >
                <AppBarMain toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <Container className={classes.container} maxWidth='lg'>
                    <Switch>
                        <Route exact from="/" render={props => <Home {...props}/>}/ >
                        <Route exact from="/about" render={props => <About {...props}/>}/ >
                    </Switch>
                </Container>
                
            </Paper>
        </ThemeProvider>
        
    )
}
