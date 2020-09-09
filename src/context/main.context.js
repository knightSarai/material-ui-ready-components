import React, {createContext} from 'react';
import moodReducer from '../reducers/mood.reducer';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


export const MoodContext = createContext();

export const MainProvider = (props) => {
    const [isDarkMood, dispatch] = useLocalStorageReducer('isDarkMood', false, moodReducer);
    const theme = createMuiTheme({
        palette: {
          type: isDarkMood ? "dark" : "light" ,
          primary: {
            main: isDarkMood? '#283149' : "#f73859",
          },
          secondary: {
            light: isDarkMood? '#f85f73' : "#4791db",
            main: isDarkMood?"#f73859" : "#1976d2",
          }
        }
      });
      console.log(theme);
    return (
        <MoodContext.Provider value={{isDarkMood, dispatch}}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </MoodContext.Provider>
    )
}

