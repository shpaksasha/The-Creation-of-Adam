import React from "react";
import {Toolbar, Typography, Icon} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {useStyles} from './header.styles';


const AppMenu = () => {
    const classes = useStyles();
    return(
    <Toolbar className={classes.root} position='fixed'>
        <div className={classes.links}>
            <Typography className={classes.title}>
                <NavLink exact={true} className={classes.link} activeClassName={classes.linkActive} to='/'>
                    Buy tickets
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/manage'>
                    Manage reservation
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link}  activeClassName={classes.linkActive} to='/guided'>
                    Guided tours
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/educational'>
                    Educational tours
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/news'>
                    News
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/help'>
                    Help & FAQ
                </NavLink>
            </Typography>
        </div>
        <Typography className={classes.icon}>
            <Icon className={{fontSize: 'large'}}>
                <NavLink className={classes.eye} to='/'>
                    <img src='/icon/shopping.svg' alt='shopping cart'/>
                    <span className={classes.see}>Cart (0)</span>
                </NavLink>
            </Icon>
        </Typography>

    </Toolbar>
    )
};

export default AppMenu;