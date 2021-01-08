import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    block: {
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        backgroundColor: '#1E1D1C',
        position: 'relative',
    },
    caption: {
        textAlign: 'center',
        marginTop: '180px',
        fontSize: '58px',
        color: '#ffffff',
        fontWeight: 600,
        fontFamily: 'Crimson Text',
        lineHeight: '87px',
        letterSpacing: '0.02em',
        marginBottom: '90px'
    },
    textForm: {
        marginBottom: '16px',
        fontFamily: 'Regular 400 italic',
        fontSize: '16px',
        lineHeight: '25px',
        color: '#ffffff',
    },
    textFormRight: {
        marginBottom: '16px',
        fontFamily: 'Regular 400 italic',
        fontSize: '16px',
        lineHeight: '25px',
        color: '#ffffff',
        marginLeft: '68px',
    },
    fieldForm: {
        marginBottom: '16px',
        fontFamily: 'Regular 400 italic',
        fontSize: '14px',
        lineHeight: '19px',
        color: '#5B5B5B',
        width: '455px',
        height: '50px',
        border: '1px solid #ffffff',
        boxSizing: 'border-box',
        backgroundColor: '#1E1D1C',
    },
    fieldFormLeft: {
        marginBottom: '16px',
        fontFamily: 'Regular 400 italic',
        fontSize: '14px',
        lineHeight: '19px',
        color: '#5B5B5B',
        width: '270px',
        height: '50px',
        border: '1px solid #ffffff',
        boxSizing: 'border-box',
        backgroundColor: '#1E1D1C',
        paddingLeft: '16px'
    },
    fieldFormRight: {
        marginLeft: '68px',
        marginBottom: '16px',
        fontFamily: 'Regular 400 italic',
        fontSize: '14px',
        lineHeight: '19px',
        color: '#5B5B5B',
        width: '160px',
        height: '50px',
        border: '1px solid #ffffff',
        boxSizing: 'border-box',
        backgroundColor: '#1E1D1C',
    },

    blockForm: {
        padding: '0rem 36.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0px auto'
    },

    button: {
        fontFamily: 'Regular 400',
        width: '160px',
        height: '35px',
        background: '#D09338',
        borderRadius: '2px',
        boxShadow: '0px 2px 6px rgba(111, 81, 24, 0.45)',
        fontSize: '15px',
        lineHeight: '22px',
        letterSpacing: '0.05em',
        color: '#ffffff',
        textTransform: 'none',
        marginTop: '25px',
        '&:hover': {
            background: '#ff8c00'
        }
    },
    twoForm: {
        margin: '0px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))

// let input_card = document.querySelector('#card');
//
// input_card.oninput = () =>{
//     let num = input_card.length;
//     if (num === 4 && num === 8 && num === 12){
//         input_card.value += ' ';
//     }
// }


// let count_card = 0;
// let inp_card = window.document.querySelector('#card');
// inp_card.addEventListener('keydown', () => {
//
//     if (count_card === 4 && count_card === 8 && count_card === 12) {
//         count_card = 0;
//         this.value += ' ';
//     }
//     count_card++;
// });

// const sel = document.getElementById('card');
//
// // let im = new Inputmask("99-9999999");
// // im.mask(sel);
//
// Inputmask({"mask": "(999) 999-9999", ... other_options, ...}).mask(sel);
// Inputmask("9-a{1,3}9{1,3}").mask(sel);
// Inputmask("9", { repeat: 10 }).mask(sel);
//
// Inputmask({ regex: "\\d*" }).mask(sel);
// Inputmask({ regex: String.raw`\d*` }).mask(sel);


const CheckOut = () => {

    const classes = useStyles();
    return (
        <div className={classes.block}>
            <Grid container md={12}>
                <Grid item md={12}>
                    <Typography className={classes.caption}>Check out</Typography>
                    <form className={classes.blockForm}>
                        <Grid container md={12}>
                            <Grid item md={12}>
                                <p className={classes.textForm}>Your email</p>
                                <input required className={classes.fieldForm} type='email'
                                       placeholder='email@gmail.com'/>
                            </Grid>
                            <Grid item md={12}>
                                <Grid container md={12} className={classes.twoForm}>
                                    <Grid item md={6}>
                                        <p className={classes.textForm}>Card number</p>
                                        <input className={classes.fieldFormLeft}
                                               id='card'
                                               type='text'
                                               placeholder='XXXX XXXX XXXX XXXX'/>
                                    </Grid>
                                    <Grid item md={6}>
                                        <p className={classes.textFormRight}>Expiration date</p>
                                        <input required className={classes.fieldFormRight} type='date'
                                               placeholder='MM/YYYY'/>
                                    </Grid>

                                    <Grid item md={6}>
                                        <p className={classes.textForm}>Name on card</p>
                                        <input required className={classes.fieldFormLeft} type='text'
                                               placeholder='Write the name here'/>
                                    </Grid>
                                    <Grid item md={6}>
                                        <p className={classes.textFormRight}>CVV*</p>
                                        <input required className={classes.fieldFormRight} type='number'
                                               placeholder='000'/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={12}>
                                <Button className={classes.button} type='submit'>
                                    Confirm and pay
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
};

export default CheckOut;
