import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {useStyles} from './check.styles';

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
