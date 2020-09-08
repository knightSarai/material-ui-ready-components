import React from 'react';
import {withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';

import {
    Drawer as MUIDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText    
} from '@material-ui/core';


const useStyles = makeStyles({
    list: {
        width: "140px"
    },
    h4:{
        textAlign: "center",
        marginTop: "1rem"
    }
})


function Drawer(props) {
    const {history, DrawerOpen, toggleDrawer} = props;
    const classes = useStyles();
 
    const onToggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        toggleDrawer(!DrawerOpen)
    }
    const renderedList = [
        {
            text: "home",
            icon: <HomeIcon/>,
            onClick: () => {
                history.push('/')
            }
        },
        {
            text: "about",
            icon: <InfoIcon/>,
            onClick: () => {
                history.push('/about')}
        }
    ]
    return (
        <div className="">
            <MUIDrawer 
                open={DrawerOpen}
                onClick={onToggleDrawer}
            >
                <Typography variant="h4" className={classes.h4} color="secondary">
                    Main
                </Typography>
                <List className={classes.list}  >
                    {
                        renderedList.map((item, index) => {
                            const {text, icon, onClick} = item;
                            return (
                                <ListItem button key={text} onClick={onClick}>
                                    <ListItemIcon >{icon && icon}</ListItemIcon>
                                    <ListItemText  primary={text} />
                                </ListItem>
                            )
                        })
                    }
                </List>
            </MUIDrawer>
        </div>
        
    )
}

export default withRouter(Drawer);