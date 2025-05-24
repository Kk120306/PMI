import App from "./App";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/Pages/HomePage";
import Contact from "./components/Pages/Contact";

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
            ,
            {
                path : "/contact",
                element : <Contact />
            }
        ]
    }
]

export default routes;