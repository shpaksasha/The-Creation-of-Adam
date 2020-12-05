import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import coliseum from '../../background/coliseum.jpg';
import {Grid, Typography, Button} from '@material-ui/core';


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
        position: 'relative',
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
        borderRadius: '3px',
        background: 'rgba(0, 0, 0, 0.7)',
        width: '360px',
        height: '185px',
        display: 'inline-block',
    },

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
                        <Grid item md={6} >
                            <div className={classes.card}>
                            <Typography>Vatican Museums and Sistine Chapel</Typography>
                            <Typography>For visitors who desire to visit
                                the Vatican Museums and the Sistine Chapel.</Typography>
                            <Button variant='contained'>
                                Reserve tickets
                            </Button>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className={classes.card}>
                            <Typography>Lunch to the Museums</Typography>
                            <Typography>Visit the Vatican Museums, the Sistine Chapel and enjoy lunch in the Restaurant Area.</Typography>
                            <Button variant='contained'>
                                Reserve tickets
                            </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export default Tickets;
