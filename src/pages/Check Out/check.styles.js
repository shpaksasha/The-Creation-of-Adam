import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
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
    }
}))
