import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import {Button, Form} from 'react-bootstrap';

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
                    <Typography>Check out</Typography>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Your email</Form.Label>
                            <Form.Control type='email' placeholder='email@mail.com'/>
                        </Form.Group>

                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Card number</Form.Label>
                            <Form.Control type='number' placeholder='XXXX XXXX XXXX XXXX'/>
                        </Form.Group>

                        <Button variant='primary' type='submit'>
                            Confirm and pay
                        </Button>
                    </Form>
                </Grid>
            </Grid>
        </div>
    )
};

export default CheckOut;
