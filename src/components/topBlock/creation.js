import React from 'react';
import {useStyles} from './creation.styles';
import {Grid, Typography} from "@material-ui/core";


const Creation = () => {
    const classes = useStyles();
    return (
        <Grid container md={12}>
            <Grid item md={12} className={classes.one}>
                <Typography className={classes.caption}>The Creation of Adam</Typography>
                <Typography className={classes.outline}>Michelangelo di Lodovico Buonarroti Simoni
                    <p>1512 AC, Sistine Chapel</p></Typography>
            </Grid>
            <Grid item md={10} className={classes.two}>
                <Typography className={classes.description}>
                    <p style={{paddingBottom: '15px'}}>The Creation of Adam (Italian: Creazione di Adamo) is a
                        fresco painting by Italian artist
                        Michelangelo, which forms part of the Sistine Chapel's ceiling, painted c. 1508–1512. It
                        illustrates the Biblical creation narrative from the Book of Genesis in which God gives life
                        to Adam, the first man. The fresco is part of a complex iconographic scheme and is
                        chronologically the fourth in the series of panels depicting episodes from Genesis.</p>

                    <p>The image of the near-touching hands of God and Adam has become iconic of humanity. The
                        painting has been reproduced in countless imitations and parodies. Michelangelo's Creation
                        of Adam is one of the most replicated religious paintings of all time.</p>
                </Typography>
            </Grid>
        </Grid>
    )
};

export default Creation;