import React from 'react';
import {useStyles} from "./home.styles";
import Creation from '../../components/topBlock/creation';
import Cards from "../../components/photoItem/cards";


const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Creation/>
            <Cards/>
        </div>
    )
};


export default Home;