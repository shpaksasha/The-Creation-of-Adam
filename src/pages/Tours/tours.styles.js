import {makeStyles} from '@material-ui/core/styles';
import tours from '../../background/tours.jpg';


export const useStyles = makeStyles(theme => ({
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
    },

    button: {
        display: 'inline-block',
        fontFamily: 'Regular 400',
        width: '117px',
        height: '35px',
        background: '#D09338',
        borderRadius: '2px',
        boxShadow: '0px 2px 6px rgba(111, 81, 24, 0.45)',
        fontSize: '15px',
        lineHeight: '22px',
        letterSpacing: '0.05em',
        color: '#ffffff',
        textTransform: 'none',
        marginTop: '28px',
        '&:hover': {
            background: '#ff8c00'
        }
    },

    notTickets: {
        marginTop: '24px',
        fontFamily: 'Regular 400 italic',
        fontSize: '14px',
        lineHeight: '19px',
        letterSpacing: '0.05rem',
        fontWeight: 'normal',
        color: '#C43333',
    },

    blockTwo: {
        marginTop: '90px',
        textAlign: 'center'
    },

    botDescription: {
        marginTop: '75px',
        padding: '0rem 6.25rem',
        display: 'inline-block',
        fontFamily: 'Medium 300 italic',
        fontSize: '14px',
        lineHeight: '21px',
        color: 'rgba(255, 255, 255, 0.5)',
    }
}))
