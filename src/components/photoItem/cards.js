import React from 'react';
import {useStyles} from './cards.styles';
import {Grid, Typography} from "@material-ui/core";

const Cards = () => {
    const classes = useStyles();
    return(
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
    )
};

export default Cards;