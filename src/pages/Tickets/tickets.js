import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import coliseum from '../../background/coliseum.jpg';
import {Button, Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        // backgroundImage: `linear-gradient(0deg, #000000 1%, rgba(0, 0, 0, 0) 105%), url('${circle}')`,
        backgroundImage: `url('${coliseum}')`,
        backgroundPosition: 'bottom',
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
        position: 'absolute'
    },

    cards: {
        position: 'relative'
    }
}))


const Tickets = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid conteiner md={12} className={classes.block}>
                <Typography>Online tickets</Typography>
                <Typography>Select admission tickets:</Typography>
                <Grid item md={6} >
                    <Card className={classes.cards}>
                        <CardContent>
                            <Typography>
                                Word of the Day
                            </Typography>
                            <Typography>
                                adjective
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={6}>
                    <Card className={classes.cards}>
                        <CardContent>
                            <Typography>
                                Word of the Day
                            </Typography>
                            <Typography>
                                adjective
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
};

export default Tickets;
