import {makeStyles} from '@material-ui/core/styles';
import adam from '../../background/adam.jpg';

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url('${adam}')`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundOrigin: 'border-box',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
    },
}))