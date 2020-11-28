import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import adam from '../../background/adam.jpg';
import {Grid, Typography} from "@material-ui/core";


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
    caption: {
        fontSize: '58px',
        color: '#ffffff',
        fontWeight: 600,
        fontFamily: 'Crimson Text',
        lineHeight: '87px',
        letterSpacing: '0.05em',

    },
    outline: {
        fontSize: '18px',
        fontWeight: 'normal',
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: 'Crimson Text',
        paddingTop: '14px',
        paddingBottom: '40px',
        lineHeight: '25px',
        width: '100%'
    },
    creation: {
        fontSize: '15px',
        lineHeight: '150%',
        fontFamily: 'Work Sans',
        fontWeight: 700,
        color: '#ffffff',
    },
    block: {
        textAlign: 'center',
        margin: '210px auto'
    },
two: {
    margin: '0 auto',
    textAlign: 'center',
}
}))


const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container md={12}>
                <Grid item md={6} className={classes.block}>
                    <Typography className={classes.caption}>The Creation of Adam</Typography>
                    <Typography className={classes.outline}>Michelangelo di Lodovico Buonarroti Simoni
                        <p>1512 AC, Sistine Chapel</p></Typography>
                </Grid>
                <Grid item md={10} className={classes.two}>
                    <Typography className={classes.creation}>
                        <p>The Creation of Adam (Italian: Creazione di Adamo) is a fresco painting by Italian artist Michelangelo, which forms part of the Sistine Chapel's ceiling, painted c. 1508–1512. It illustrates the Biblical creation narrative from the Book of Genesis in which God gives life to Adam, the first man. The fresco is part of a complex iconographic scheme and is chronologically the fourth in the series of panels depicting episodes from Genesis.</p>

                       <p>The image of the near-touching hands of God and Adam has become iconic of humanity. The painting has been reproduced in countless imitations and parodies. Michelangelo's Creation of Adam is one of the most replicated religious paintings of all time.</p>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
};


export default Home;