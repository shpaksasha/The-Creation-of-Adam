import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import adam from '../../background/adam.jpg';
import {Grid, Typography} from '@material-ui/core';


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
        position: 'relative',
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
        fontStyle: 'italic',
    },
    description: {
        fontSize: '15px',
        lineHeight: '150%',
        fontFamily: 'Work Sans',
        fontWeight: 700,
        color: '#ffffff',
    },
    one: {
        textAlign: 'center',
        marginTop: '210px'
    },
    two: {
        justifyContent: 'space-between',
        margin: '0 auto',
    },
    photo: {
        justifyContent: 'space-around',
        marginTop: '182px',
        backgroundColor: 'black',
    },
    text: {
        fontSize: '18px',
        fontFamily: 'Crimson Text',
        lineHeight: '10px',
        fontStyle: 'italic',
        fontWeight: 'normal',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    card: {
        padding: '0 20px',
    },
    cards: {
        marginTop: '-95px',
        display: 'flex',
        padding: '0rem 12rem',
        justifyContent: 'space-around',
    },
    history: {
        marginTop: '37px',
        marginBottom: '17px',
        fontSize: '32px',
        fontFamily: 'Crimson Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        letterSpacing: '0.05em',
        color: '#ffffff'
    },
    portrait: {
        fontSize: '15px',
        lineHeight: '150%',
        fontFamily: 'Work Sans',
        fontWeight: 600,
        color: '#ffffff',
    }
}))

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
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
            <Grid container md={12} className={classes.photo}>
                <div className={classes.cards}>
                    <Grid item md={4} className={classes.card}>
                        <object type='image/svg+xml' data='/images/photo_1.jpg' width='350px' height='270px'/>
                        <Typography className={classes.text}>The Creation of Adam</Typography>
                    </Grid>
                    <Grid item md={4} className={classes.card}>
                        <object type='image/svg+xml' data='/images/photo_2.jpg' width='350px' height='270px'/>
                        <Typography className={classes.text}>Painted the ceiling of the Sistine Chapel</Typography>
                    </Grid>
                    <Grid item md={4} className={classes.card}>
                        <object type='image/svg+xml' data='/images/photo_3.jpg' width='350px' height='270px'/>
                        <Typography className={classes.text}>Details</Typography>
                    </Grid>
                </div>
                <Grid item md={10}>
                    <Typography className={classes.history}>History</Typography>
                    <Typography className={classes.portrait}><p style={{paddingBottom: '15px'}}>In 1505 Michelangelo was
                        invited back to Rome by the newly elected Pope Julius II. He was commissioned to build the
                        Pope's tomb, which was to include forty statues and be finished in five years.</p>

                        <p style={{paddingBottom: '15px'}}>Under the patronage of the Pope, Michelangelo experienced
                            constant interruptions to his work on the tomb in order to accomplish numerous other tasks.
                            Although Michelangelo worked on the tomb for 40 years, it was never finished to his
                            satisfaction. It is located in the Church of
                            S. Pietro in Vincoli in Rome and is most famous for his central figure of Moses, completed
                            in 1516. Of the other statues intended for the tomb, two known as the Rebellious Slave and
                            the Dying Slave, are now in the Louvre.</p>

                        <p>During the same period, Michelangelo painted the ceiling of the Sistine Chapel, which took
                            approximately four years to complete (1508–1512). According to Condivi's account, Bramante,
                            who was working on the building of St Peter's Basilica, resented Michelangelo's commission
                            for the Pope's tomb and convinced the Pope to commission him in a medium with which he was
                            unfamiliar, in order that he might fail at the task.</p></Typography>
                </Grid>
            </Grid>
        </div>
    )
};


export default Home;