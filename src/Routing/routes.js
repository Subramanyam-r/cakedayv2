import AuthPage from "../Pages/AuthPage";
import HomePage from "../Pages/HomePage";

let routes = [
    {
        path: "/auth",
        component: AuthPage
    },
    {
        path: "/",
        component: HomePage
    }
]

export { routes };

