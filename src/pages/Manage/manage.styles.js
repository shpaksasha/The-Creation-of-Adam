import {makeStyles} from '@material-ui/core/styles';
import diva from "../../background/diva.jpg";

export const useStyles = makeStyles(theme => ({
    root: {
        // backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, .2), rgba(0,0,0, 1)), url('${diva}')`,
        backgroundImage: `url('${diva}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundOrigin: 'border-box',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        // '&:after': {
        //     content: '',
        //     backgroundColor: 'rgba(0, 0, 0, 0.6)',
        //     position: 'absolute',
        //     bottom: 0,
        //     top: 0,
        //     left: 0,
        //     right: 0,
        // }
    },

    caption: {
        fontSize: '58px',
        color: '#ffffff',
        fontWeight: 600,
        fontFamily: 'Crimson Text',
        lineHeight: '87px',
        letterSpacing: '0.05em',
    },

    block: {
        textAlign: 'center',
        margin: '270px auto'
    },

    button: {
        fontFamily: 'Regular 400',
        fontSize: '19px',
        lineHeight: '25px',
        color: '#ffffff',
        letterSpacing: '0.05em',
        textTransform: 'none',
        marginTop: '27px',
        width: '204px',
        height: '56px',
        background: '#D09338',
        borderRadius: '2px',
        boxShadow: '0px 2px 6px rgba(111, 81, 24, 0.45)',
        '&:hover': {
            background: '#ff8c00'
        }
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

    about: {
        position: 'absolute',
        fontFamily: 'Regular 400 italic',
        fontSize: '16px',
        lineHeight: '29px',
        color: 'rgba(255, 255, 255, 0.5)',
        bottom: '25px',
        right: '100px',
        textAlign: 'right'
    }
}))
