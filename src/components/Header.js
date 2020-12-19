import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Menu';
import Collapse from '@material-ui/core/Collapse';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100vh"
  },
  appbar: {
    background: '#333',
    height: '9vh'
  },
  appbarTitle:{
    flexGrow: '1',
    fontFamily: 'Nunito'
  },
  appbarWrapper:{
    width: '80%',
    margin: '0 auto'
  },
  welcomeText:{
    color: '#fff',
    fontFamily: 'Nunito',
    fontSize: '4rem'
  },
  icon:{
    color: '#fff',
    fontSize: '2rem'
  },
  coloredText: {
    color: '#5AFF3D'
  }
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, [])

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>bike<span className={classes.coloredText}>Shop</span></h1>
        <Tooltip title='No functionality yet' arrow>
          <IconButton>
            <SortIcon className={classes.icon}/>
          </IconButton> 
        </Tooltip>
        </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.welcomeTextWrapper}>
          <h1 className={classes.welcomeText}>Welcome to the employee page for bike
            <span className={classes.coloredText}>Shop</span>
          </h1>
        </div>
      </Collapse>
    </div>
  );
}