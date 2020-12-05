import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import coliseum from '../../background/coliseum.jpg';
import {Button, Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        // backgroundImage: `linear-gradient(0deg, #000000 1%, rgba(0, 0, 0, 0) 105%), url('${circle}')`,
        backgroundImage: `url('${coliseum}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        position: 'relative',
    },

    caption: {
        fontSize: '58px',
        color: '#ffffff',
        fontWeight: 600,
        fontFamily: 'Crimson Text',
        lineHeight: '87px',
        letterSpacing: '0.05em',
    },
    select: {
        marginTop: '15px',
        fontFamily: 'Regular 400 italic',
        fontSize: '14px',
        lineHeight: '19px',
        letterSpacing: '0.05rem',
        fontWeight: 'normal',
        color: '#ffffff',
    },
    text: {
        margin: '170px auto',
        textAlign: 'center',
    },

}))


const Tickets = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid conteiner md={12}>
                <Grid item md={12} className={classes.text}>
                    <Typography className={classes.caption}>Online tickets</Typography>
                    <Typography className={classes.select}>Select admission tickets:</Typography>
                </Grid>
            </Grid>
        </div>
    )
};

export default Tickets;
