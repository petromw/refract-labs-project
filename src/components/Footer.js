import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '20vh',
        color: '#fff',
        backgroundColor: '#333',
    },
    contactInfo: {
        marginLeft: '2%'
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <div className={classes.contactInfo}>
                <h3>Contact Me</h3>
                <p>Email: petromw@mail.uc.edu</p>
                <p>Phone: (440) 554-3745</p>
            </div>
        </footer>
    );
}