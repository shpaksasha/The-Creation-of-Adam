// import React from "react";
// import {makeStyles} from "@material-ui/core/styles";
// import {Container, Row, Col, Carousel} from 'react-bootstrap';
//
//
// const useStyles = makeStyles(theme => ({
// carousel: {
//         display: 'block',
//         width: '100%',
//         height: '550px'
//     },
//
//     caption: {
//         color: '#ff6f00',
//         fontSize: '2.3em',
//         fontFamily: 'Roboto'
//     },
//
//     description: {
//         color: '#ff6f00',
//         fontSize: '1.2em',
//         fontFamily: 'Roboto'
//     }
// }))
//
//
// const Slider = () => {
//     const classes = useStyles();
//     return(
//         <Container>
//             <Row>
//                 <Col md='12'>
//                     <Carousel position='fixed' controls={false} fade={true} interval={5000}>
//                         <Carousel.Item>
//                             <img className='d-block w-100' src='/images/adam_1.svg' alt='calendar'/>
//                             <Carousel.Caption>
//                                 <h3 className={classes.caption}>Встигайте ще більше</h3>
//                                 <p className={classes.description}>Витрачайте менше часу на планування дня і більше - на важливі справи. Новий Google Календарь допоможе вам в цьому !</p>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//
//                         <Carousel.Item>
//                             <img className='d-block w-100' src='/images/pieta.svg' alt='calendar'/>
//                             <Carousel.Caption>
//                                 <h3 className={classes.caption}>Наглядний розклад</h3>
//                                 <p className={classes.description}>Карти і картинки роблять ваш календарь більш яскравим та допомогають швидше орієнтуватись в власних планах.</p>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//
//                         <Carousel.Item>
//                             <img className='d-block w-100' src='/images/stairs.svg' alt='calendar'/>
//                             <Carousel.Caption>
//                                 <h3 className={classes.caption}>Плани на найближче майбутне</h3>
//                                 <p className={classes.description}>Хочете побачить, що ви запланували на день, тиждень або місяць ? Просто оберіть потрібний режим календаря.</p>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                     </Carousel>
//                 </Col>
//             </Row>
//         </Container>
//     )
// };
//
// export default Slider;