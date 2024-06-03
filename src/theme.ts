import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
    palette: {
      primary: {
        main: '#091033',
      },
      secondary: {
        main: '#548C6C',
      },
    },
    typography: {
        fontFamily: "helvetica neue",
    }
  });

  

  theme = responsiveFontSizes(theme);

  

  export default theme;