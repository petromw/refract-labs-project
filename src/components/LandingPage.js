import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../assets/bikeShopAssett.jpg'
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '110vh',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',    
    },
    title: {
        paddingLeft: 10,
        justifyContent: "center",

    }
}));

export default function LandingPage() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
        </div>        
    )
}