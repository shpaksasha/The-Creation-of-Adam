import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import tours from '../../background/tours.jpg';
import {Grid, Typography} from '@material-ui/core';
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';


const useStyles = makeStyles(theme => ({
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
    firstBlock: {
        textAlign: 'center',
        marginTop: '170px'
    },
    caption: {
        fontSize: '58px',
        color: '#ffffff',
        fontWeight: 600,
        fontFamily: 'Crimson Text',
        lineHeight: '87px',
        letterSpacing: '0.05em',
    },
    tickets: {
        marginTop: '15px',
        fontFamily: 'Regular 400 italic',
        fontSize: '14px',
        lineHeight: '19px',
        letterSpacing: '0.05rem',
        fontWeight: 'normal',
        color: '#ffffff',
    },
    data: {

        height: '15px',
        color: '#ffffff',
       background: 'rgba(0,0,0, 0.7)',
    }
}))

const Tours = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container md={12}>
                <Grid item md={12} className={classes.firstBlock}>
                    <Typography className={classes.caption}>Vatican Museums and Sistine Chapel</Typography>
                    <Typography className={classes.tickets}>Select date and number of tickets</Typography>
                </Grid>
                <Grid item md={12}>
                    <Grid container md={12}>
                        <Grid item md={4} className={classes.data}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    // inputVariant='standard'
                                    // disableToolbar='true'
                                    inputVariant="outlined"
                                    color='secondary'
                                    id="date-picker-dialog"
                                    label='1. Select date and time'
                                    format='dd/MM/yyyy'
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                                <KeyboardTimePicker
                                    pmam='true'
                                    id='time'
                                    label='.'
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        {/*<Grid item md={4}></Grid>*/}
                        {/*<Grid item md={4}></Grid>*/}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export default Tours;
