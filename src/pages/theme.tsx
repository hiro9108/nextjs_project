import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#d7385e',
            // main: '#d2f5e3',
            // main: '#556cd6',
        },
        secondary: {
            main: '#cc0e74',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#f1f3f8',
        },
    },
});

export default theme;