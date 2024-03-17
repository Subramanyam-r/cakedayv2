import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "../Pages/AuthPage";
import { routes } from "./routes";

function Router() {
    const [user, setUser] = useState(null);

    console.log(user)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) setUser(user)
            else setUser(null);
        });
    }, []);

    return user ?
        <BrowserRouter>
            <Routes>
                {routes.map(route => <Route key={route.path} path={route.path} element={<route.component user={user} />} />)}
            </Routes>
        </BrowserRouter> : <AuthPage />
}

export default Router;