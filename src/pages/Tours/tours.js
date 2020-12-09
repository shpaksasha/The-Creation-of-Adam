import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import tours from '../../background/tours.jpg';
import {Grid, TextField, Typography,} from '@material-ui/core';
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
    block: {
        padding: '0rem 11rem',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: '35px'
    }

}))

const Tours = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const currencies = [
        {
            value: '1 ticket',
            label: '1 ticket',
        },
        {
            value: '2 ticket',
            label: '2 ticket',
        },
        {
            value: '3 ticket',
            label: '3 ticket',
        },
        {
            value: '4 ticket',
            label: '4 ticket',
        },
    ];

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container md={12}>
                <Grid item md={12} className={classes.firstBlock}>
                    <Typography className={classes.caption}>Vatican Museums and Sistine Chapel</Typography>
                    <Typography className={classes.tickets}>Select date and number of tickets</Typography>
                </Grid>
                <Grid item md={12}>
                    <Grid container md={12} className={classes.block}>
                        <Grid item md={4}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    // disableToolbar='true'
                                    // inputVariant="outlined"
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
                        <Grid item md={4}>
                            <TextField
                                id='outlined-helperText'
                                helperText='Please select your currency'
                                variant='outlined'
                                select
                                label='2. Select full tickets'
                                value={currency}
                                onChange={handleChange}
                                SelectProps={{native: true}}>
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item md={4}>
                            <TextField
                                id='outlined-helperText'
                                helperText='Please select your currency'
                                variant='outlined'
                                select
                                label='3. Select reduces tickets'
                                value={currency}
                                onChange={handleChange}
                                SelectProps={{native: true}}>
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};

export default Tours;
