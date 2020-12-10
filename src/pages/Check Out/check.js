import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    block: {
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        backgroundColor: '#1E1D1C',
    }
}))

const CheckOut = () => {
    const classes = useStyles();
    return (
        <div className={classes.block}>
            <Grid container md={12}>
                <Grid item md={12}>

                </Grid>
            </Grid>
        </div>
    )
};

export default CheckOut;
