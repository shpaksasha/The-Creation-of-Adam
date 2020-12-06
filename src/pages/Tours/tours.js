import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import tours from '../../background/tours.jpg';

const useStyles = makeStyles(theme =>({
    root: {
        backgroundImage: `url('${tours}')`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
    },
}))

const Tours = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>

        </div>
    )
}

export default Tours;