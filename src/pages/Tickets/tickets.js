import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import coliseum from '../../background/coliseum.jpg';
import {Button, Grid, Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        // backgroundImage: `linear-gradient(0deg, #000000 1%, rgba(0, 0, 0, 0) 105%), url('${circle}')`,
        backgroundImage: `url('${coliseum}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'border-box',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
    },
    block: {
        marginTop: '170px',
        textAlign: 'center'
    },
    caption: {
        fontSize: '58px',
        color: '#ffffff',
        fontWeight: 600,
        fontFamily: 'Crimson Text',
        lineHeight: '87px',
        letterSpacing: '0.05em',
    },
    tickets: {
        marginTop: '15px',
        fontFamily: 'Regular 400 italic',
        fontSize: '14px',
        lineHeight: '19px',
        letterSpacing: '0.05rem',
        fontWeight: 'normal',
        color: '#ffffff',
    },
    blockTickets: {
        flexGrow: 1,
        padding: '0rem 24rem',
        textAlign: 'center',
        marginTop: '45px',
    },
    card: {
        borderRadius: '4px',
        background: 'rgba(0, 0, 0, 0.7)',
        width: '360px',
        height: '185px',
        display: 'inline-block',
    },
    title: {
        paddingTop: '24px',
        paddingBottom: '16px',
        fontFamily: 'Medium italic',
        fontSize: '16px',
        lineHeight: '22px',
        color: '#ffffff',
        fontWeight: 600,
    },
    description: {
        padding: '0rem 2rem',
        fontFamily: 'Medium 300 italic',
        fontSize: '14px',
        lineHeight: '21px',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    button: {
        fontFamily: 'Regular 400',
        width: '160px',
        height: '35px',
        background: '#D09338',
        borderRadius: '2px',
        boxShadow: '0px 2px 6px rgba(111, 81, 24, 0.45)',
        fontSize: '15px',
        lineHeight: '22px',
        letterSpacing: '0.05em',
        color: '#ffffff',
        textTransform: 'none',
        marginTop: '28px',
        '&:hover': {
            background: '#ff8c00'
        }
    },
    notTickets: {
        marginBottom: '32px',
        fontFamily: 'Regular 400 italic',
        fontSize: '14px',
        lineHeight: '19px',
        letterSpacing: '0.05rem',
        fontWeight: 'normal',
        color: '#C43333',
    },
    botDescription: {
        padding: '0rem 35rem',
        display: 'inline-block',
        fontFamily: 'Medium 300 italic',
        fontSize: '14px',
        lineHeight: '21px',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    block3: {
        marginTop: '183px',
        textAlign: 'center'
    }
}))


const Tickets = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container md={12}>
                <Grid item md={12} className={classes.block}>
                    <Typography className={classes.caption}>Online tickets</Typography>
                    <Typography className={classes.tickets}>Select admission tickets:</Typography>
                </Grid>
                <Grid item md={12}>
                    <Grid container md={12} className={classes.blockTickets}>
                        <Grid item md={6}>
                            <div className={classes.card}>
                                <Typography className={classes.title}>Vatican Museums and Sistine Chapel</Typography>
                                <Typography className={classes.description}>For visitors who desire to visit
                                    the Vatican Museums and the Sistine Chapel.</Typography>
                                <Button variant='contained' className={classes.button}>
                                    Reserve tickets
                                </Button>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={classes.card}>
                                <Typography className={classes.title}>Lunch to the Museums</Typography>
                                <Typography className={classes.description}>Visit the Vatican Museums, the Sistine
                                    Chapel and enjoy lunch in the Restaurant Area.</Typography>
                                <Button variant='contained' className={classes.button}>
                                    Reserve tickets
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} className={classes.block3}>
                    <Typography className={classes.notTickets}>Tickets are not refundable.</Typography>
                    <Typography className={classes.botDescription}>The ticket gives the right to visit the Vatican
                        Museums and the Sistine Chapel and is valid for the day of issue. Tickets may be reserved (with
                        a maximum of 10) up to 60 days before the date of the intended visit.</Typography>
                </Grid>
            </Grid>
        </div>
    )
};

export default Tickets;
