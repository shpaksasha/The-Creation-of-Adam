import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import adam from '../../background/adam.jpg';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url('${adam}')`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        position: 'relative'
    },
}))


const Home = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>

        </div>
    )
};



export default Home;