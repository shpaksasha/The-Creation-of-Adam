import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import coliseum from '../../background/coliseum.jpg';

const useStyles = makeStyles(theme => ({
    root: {
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
    }
}))


const Tickets = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>

        </div>
    )
};

export default Tickets;
