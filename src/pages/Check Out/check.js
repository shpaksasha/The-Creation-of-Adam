import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    block: {
        // textAlign: 'center',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        backgroundColor: '#1E1D1C',
    },
    caption: {
        textAlign: 'center',
        marginTop: '180px',
        fontSize: '58px',
        color: '#ffffff',
        fontWeight: 600,
        fontFamily: 'Crimson Text',
        lineHeight: '87px',
        letterSpacing: '0.02em',
        marginBottom: '90px'
    },
    textForm: {
        marginBottom: '16px',
        fontFamily: 'Regular 400 italic',
        fontSize: '16px',
        lineHeight: '25px',
        color: '#ffffff',

    },
    fieldForm: {
        marginBottom: '16px',
        fontFamily: 'Regular 400 italic',
        fontSize: '14px',
        lineHeight: '19px',
        color: '#5B5B5B',
        width: '455px',
        height: '50px',
        border: '1px solid #ffffff',
        boxSizing: 'border-box',
        backgroundColor: '#1E1D1C',
    },
    blockForm: {
        // display: 'inline-block'
        // margin: '0px auto'
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
        marginTop: '25px',
        '&:hover': {
            background: '#ff8c00'
        }
    }

}))

const CheckOut = () => {
    const classes = useStyles();
    return (
        <div className={classes.block}>
            <Grid container md={12}>
                <Grid item md={12}>
                    <Typography className={classes.caption}>Check out</Typography>
                    <form className={classes.blockForm}>
                        <div>
                            <p className={classes.textForm}>Your email</p>
                            <input required className={classes.fieldForm} type='email' placeholder='email@gmail.com'/>
                        </div>

                        <div>
                            <p className={classes.textForm}>Card number</p>
                            <input required className={classes.fieldForm} type='number' min='1' max='16'
                                   placeholder='XXXX XXXX XXXX XXXX'/>
                        </div>

                        <Button className={classes.button} type='submit'>
                            Confirm and pay
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
};

export default CheckOut;
