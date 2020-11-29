import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import tower from '../../background/greece.jpeg';



const useStyles = makeStyles(theme =>({
    root: {
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, .3), rgba(0,0,0, 1)), url('${tower}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        position: 'relative',
        '&:after': {
            content: '',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
        }
    }
}))

const Manage = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>

        </div>
    )
};


export default Manage;