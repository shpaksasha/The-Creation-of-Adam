import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {useStyles} from './check.styles';


const CheckOut = () => {

    const classes = useStyles();
    return (
        <div className={classes.block}>
            <Grid container md={12}>
                <Grid item md={12}>
                    <Typography className={classes.caption}>Check out</Typography>
                    <form className={classes.blockForm}>
                        <Grid container md={12}>
                            <Grid item md={12}>
                                <p className={classes.textForm}>Your email</p>
                                <input required className={classes.fieldForm} type='email'
                                       placeholder='email@gmail.com'/>
                            </Grid>
                            <Grid item md={12}>
                                <Grid container md={12} className={classes.twoForm}>
                                    <Grid item md={6}>
                                        <p className={classes.textForm}>Card number</p>
                                        <input className={classes.fieldFormLeft}
                                               id='card'
                                               type='text'
                                               placeholder='XXXX XXXX XXXX XXXX'/>
                                    </Grid>
                                    <Grid item md={6}>
                                        <p className={classes.textFormRight}>Expiration date</p>
                                        <input required className={classes.fieldFormRight} type='date'
                                               placeholder='MM/YYYY'/>
                                    </Grid>

                                    <Grid item md={6}>
                                        <p className={classes.textForm}>Name on card</p>
                                        <input required className={classes.fieldFormLeft} type='text'
                                               placeholder='Write the name here'/>
                                    </Grid>
                                    <Grid item md={6}>
                                        <p className={classes.textFormRight}>CVV*</p>
                                        <input required className={classes.fieldFormRight} type='number'
                                               placeholder='000'/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={12}>
                                <Button className={classes.button} type='submit'>
                                    Confirm and pay
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
};

export default CheckOut;
