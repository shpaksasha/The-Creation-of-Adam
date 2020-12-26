import React, {useState} from 'react';
import {Button, Grid, TextField, Typography} from '@material-ui/core';
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {useStyles} from './tours.styles';

const Tours = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [currency, setCurrency] = React.useState('1 ticket');

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
                                    id='date-picker-dialog'
                                    label='1. Select date and time'
                                    format='dd/MM/yyyy'
                                    value={selectedDate}
                                    onChange={handleDateChange}/>
                                <KeyboardTimePicker
                                    pmam='true'
                                    id='time'
                                    label='.'
                                    value={selectedDate}
                                    onChange={handleDateChange}/>
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
                <Grid item md={12} className={classes.blockTwo}>
                    <Button variant='contained' className={classes.button}>Add to cart</Button>
                    <Typography className={classes.notTickets}>Tickets are not refundable.</Typography>
                    <Typography className={classes.botDescription}>In order to make the reservation online please have
                        on hand the following documents: an identity document and names of all the participants. It is
                        possible to reserve a ticket at a reduced price for children aged between 6 and 18 years old (18
                        years included). It is also possible to reserve a ticket at a reduced price for students up to
                        25 years of age on presentation of a student identity document or a valid International Student
                        Card on the day of the visit.*
                        After the reservation request is confirmed, the applicant will receive an e-mail with the
                        confirmation of the email address used for booking. After the confirmation you will receive the
                        voucher containing the reservation code and tour information. The applicant is asked to print
                        off the voucher (it is also possible to show it on a smartphone or tablet) as to present it on
                        the day of the tour. The reservation will be checked by means of the bar code present on the
                        voucher. In case of loss of the voucher please consult the Customer Care Staff.

                        Up to one hour before the tour, it is possible to modify the reservation date depending upon
                        availability. It isn't possible to make changes to the number of participants.</Typography>
                </Grid>
            </Grid>
        </div>
    )
};

export default Tours;
