import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {useStyles} from './manage.styles';


const Manage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container md={12}>
                <Grid item md={12} className={classes.block}>
                    <Typography className={classes.caption}>Vatican Museums</Typography>
                    <Button variant='contained' className={classes.button}>Reserve tickets</Button>
                    <Typography className={classes.tickets}>tickets starting from €8</Typography>
                    <Typography className={classes.about}>Pieta, Michelangelo
                        <p>1498 —1499, Papal Basilica of St. Peter</p></Typography>
                </Grid>
            </Grid>
        </div>
    )
};


export default Manage;
