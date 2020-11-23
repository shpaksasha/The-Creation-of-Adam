import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        zIndex: 1,
        position: 'absolute',
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: 'transparent',
        // backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: '0rem 6.25rem',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        opacity: 1,

    },

    links: {
        display: 'flex',
    },

    title: {
        paddingRight: '90px'
    },

    link: {
        color: 'rgba(0, 0, 0, 0.8)',
        position: 'relative',
        textDecoration: 'none',
        fontSize: '15px',
        lineHeight: '24px',
        fontFamily: 'Work Sans',
        '&:hover': {
            textDecoration: 'none',
            color: '#ffffff',
        }
    },

    linkActive: {
        paddingBottom: '5px',
        borderBottom: '2px solid #37474f',
        color: '#311b92',
        fontSize: '15px',
        fontFamily: 'Work Sans',
        '&:hover': {
            color: '#311b92',
        }
    },

    icon: {
        textDecoration: 'none',
    },

    eye: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none'
        }
    },

    see: {
        width: '100%',
        color: '#FFFFFF',
        fontSize: '16px',
        letterSpacing: '120%',
        fontFamily: 'Work Sans',
        paddingLeft: '8px',
    },
}))