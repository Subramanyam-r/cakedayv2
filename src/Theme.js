import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { grey, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
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
    },

    auth: {
        spacing: {
            inputFieldWidth: "20rem"
        }
    }
});

export { theme };
