import "./Firebase/init"
import "./Theme"
import Router from "./Routing/Router"
import { theme } from './Theme';
import { ThemeProvider } from "@mui/material/styles";

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Router />
            </ThemeProvider>
        </div>
    );
}

export default App;