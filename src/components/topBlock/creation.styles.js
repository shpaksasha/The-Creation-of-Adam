import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    one: {
        textAlign: 'center',
        marginTop: '210px'
    },
    caption: {
        fontSize: '58px',
        color: '#ffffff',
        fontWeight: 600,
        fontFamily: 'Crimson Text',
        lineHeight: '87px',
        letterSpacing: '0.05em',
    },
    outline: {
        fontSize: '18px',
        fontWeight: 'normal',
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: 'Crimson Text',
        paddingTop: '14px',
        paddingBottom: '40px',
        lineHeight: '25px',
        fontStyle: 'italic',
    },
    two: {
        justifyContent: 'space-between',
        margin: '0 auto',
    },
    description: {
        fontSize: '15px',
        lineHeight: '150%',
        fontFamily: 'Work Sans',
        fontWeight: 700,
        color: '#ffffff',
    },

}))