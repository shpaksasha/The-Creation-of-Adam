import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: '#eceff1',
        padding: '0rem 6.25rem',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
    },
}))