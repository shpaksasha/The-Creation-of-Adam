import React from "react";
import {Toolbar, Typography, Icon} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {useStyles} from './header.styles';


const AppMenu = () => {
    const classes = useStyles();
    return(
    <Toolbar className={classes.root} position='fixed'>
        <Typography className={classes.icon}>
            <Icon className={{height: '42px', width: '42px'}}>
                <NavLink className={classes.eye} to='/'>
                    <img src='/icon/ellipse.svg' alt="Logo"/>
                    <span className={classes.see}><b>I see</b> you</span>
                </NavLink>
            </Icon>
        </Typography>

        <div className={classes.links}>
            <Typography className={classes.title}>
                <NavLink exact={true} className={classes.link} activeClassName={classes.linkActive} to='/'>
                    Home
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/services'>
                    Services
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link}  activeClassName={classes.linkActive} to='/technologies'>
                    Technologies
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/portfolio'>
                    Portfolio
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/about'>
                    About us
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/contacts'>
                    Contacts
                </NavLink>
            </Typography>
        </div>
    </Toolbar>
    )
};

export default AppMenu;