import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import diva from '../../background/diva.jpg';
import {Button, Grid, Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        // backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, .2), rgba(0,0,0, 1)), url('${diva}')`,
        backgroundImage: `url('${diva}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        position: 'relative',
        '&:after': {
            content: '',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
        }
    },
    caption: {
        fontSize: '58px',
        color: '#ffffff',
        fontWeight: 600,
        fontFamily: 'Crimson Text',
        lineHeight: '87px',
        letterSpacing: '0.05em',
    },
    block: {
        textAlign: 'center',
        margin: '270px auto'
    },
    button: {
        fontFamily: 'Crimson Text',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#ffffff',
        letterSpacing: '0.05em',
        textTransform: 'none',
        marginTop: '27px',
        width: '204px',
        height: '56px',
        background: '#D09338',
        borderRadius: '2px',
        boxShadow: '0px 2px 6px rgba(111, 81, 24, 0.45)',
    },
    tickets: {

    }
}))

const Manage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container md={12}>
                <Grid item md={12} className={classes.block}>
                    <Typography className={classes.caption}>Vatican Museums</Typography>
                    <Button variant='contained' className={classes.button}>Reserve tickets</Button>
                    <Typography className={classes.tickets}>tickets starting from €8</Typography>
                </Grid>
            </Grid>
        </div>
    )
};


export default Manage;