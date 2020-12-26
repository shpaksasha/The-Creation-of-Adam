import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {useStyles} from './tickets.styles';


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
