import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";
import { light } from '@mui/material/styles/createPalette';

const theme = createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: "inherit"
                }
            }
        }
    },

    palette: {
        primary: {
            main: pink[400]
        },
        light: {
            main: light[500]
        },
        greyed: {
            main: grey[500]
        }
    },

    typography: {
        fontFamily: "Roboto"
    }
});

export { theme }