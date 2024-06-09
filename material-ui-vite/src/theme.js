import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#224ff3',
    },
    secondary: {
      main: '#222222',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
