import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import useToggleDrawer from '../../hooks/useToggleState';

import {AppBar, Toolbar, Typography, Button, IconButton, Switch} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from './Drawer'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
      display: "flex"
  }
}));

export default function Appbar(props) {
  const classes = useStyles();

  const {toggleTheme, isDarkMode} = props;
  const onSelectChange = () => {
    toggleTheme(!isDarkMode)
  }
  const [DrawerOpen, toggleDrawer] = useToggleDrawer(false);

  return (
    <div className={classes.root}>
        <Drawer className={classes.drawer} DrawerOpen={DrawerOpen} toggleDrawer={toggleDrawer}/>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=> toggleDrawer(!DrawerOpen)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Main
            </Typography>
            <Switch checked={isDarkMode} onChange={onSelectChange}/>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
    </div>
  );
}