import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    photo: {
        justifyContent: 'space-around',
        marginTop: '182px',
        backgroundColor: 'black',
    },
    cards: {
        marginTop: '-95px',
        display: 'flex',
        padding: '0rem 12rem',
        justifyContent: 'space-around',
    },
    card: {
        padding: '0 20px',
    },
    text: {
        fontSize: '18px',
        fontFamily: 'Crimson Text',
        lineHeight: '10px',
        fontStyle: 'italic',
        fontWeight: 'normal',
        color: 'rgba(255, 255, 255, 0.5)',
    },
    history: {
        marginTop: '45px',
        marginBottom: '17px',
        fontSize: '32px',
        fontFamily: 'Crimson Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        letterSpacing: '0.05em',
        color: '#ffffff'
    },
    portrait: {
        fontSize: '15px',
        lineHeight: '150%',
        fontFamily: 'Work Sans',
        fontWeight: 600,
        color: '#ffffff',
    }
}))