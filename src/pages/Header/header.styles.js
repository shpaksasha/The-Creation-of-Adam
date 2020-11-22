import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: '',
        padding: '0rem 6.25rem',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        opacity: 1,
        zIndex:-1,
    },

    links: {
        display: 'flex',
    },

    title: {
        paddingRight: '90px'
    },

    link: {
        position: 'relative',
        textDecoration: 'none',
        color: '#828282',
        fontSize: '15px',
        lineHeight: '24px',
        fontFamily: 'Work Sans'
    },

    linkActive: {
        paddingBottom: '5px',
        borderBottom: '2px solid #37474f',
        color: '#37474f',
        fontSize: '15px',
        fontFamily: 'Work Sans'
    },

    icon: {
        textDecoration: 'none',
    },

    eye: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    see: {
        width: '100%',
        // color: '#FFFFFF',
        color: '#303f9f',
        fontSize: '16px',
        letterSpacing: '120%',
        fontFamily: 'Work Sans',
        paddingLeft: '8px',
    },

}))