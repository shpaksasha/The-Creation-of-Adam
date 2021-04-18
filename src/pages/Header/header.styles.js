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
        [theme.breakpoints.down('md')]: {
            padding: '0rem 3.125rem',
        },
    },

    links: {
        display: 'flex',
    },

    title: {
        paddingRight: '90px',
        [theme.breakpoints.down('md')]: {
            paddingRight: '70px'
        },
        [theme.breakpoints.down('sm')]: {
            paddingRight: '60px'
        },

    },

    link: {
        color: 'rgba(255, 255, 255, 0.5)',
        position: 'relative',
        textDecoration: 'none',
        fontSize: '15px',
        lineHeight: '24px',
        fontFamily: 'Work Sans',
        '&:hover': {
            textDecoration: 'none',
            color: '#ffffff',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px'
        }
    },

    linkActive: {
        paddingBottom: '5px',
        borderBottom: '2px solid #ffffff',
        color: '#ffffff',
        fontSize: '15px',
        fontFamily: 'Work Sans',
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
