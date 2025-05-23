import App from "./App";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/Pages/HomePage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children : [
            {
                path : "/",
                element : <HomePage />
            }
        ]
    }
]

export default routes;