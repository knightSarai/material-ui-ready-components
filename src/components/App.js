import React from 'react';
import AppBarMain from './appBars/AppBarMain';
import useToggleContext from '../hooks/useToggleState';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Paper, Container, Typography, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        height: "100vh"
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
            <Paper className={classes.paper} square>
                <AppBarMain toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <Container className={classes.container} maxWidth='lg'>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptate facere obcaecati eius cupiditate quidem quas harum ad, nulla rerum nihil ut at. Culpa cum vitae, sint quo est libero?
                    </Typography>
                    <Button variant="contained" color="secondary"> BTN</Button>
                </Container>
                
            </Paper>
        </ThemeProvider>
        
    )
}
