import "./Firebase/init"
import "./Theme"
import Router from "./Routing/Router"
import { theme } from './Theme';
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {

    return (
        <div className="App">
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Router />
                </ThemeProvider>
            </Provider>
        </div>
    );
}

export default App;