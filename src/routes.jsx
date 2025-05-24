import App from "./App";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/Pages/HomePage";
import Contact from "./components/Pages/Contact";
import Articles from "./components/Pages/Articles";
import ArticleFace from "./components/Pages/ArticleFace";

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
            },
            {
                path : "/articles",
                element : <Articles />
            },
            {
                path : "/articles/:slug",
                element : <ArticleFace />
            }
        ]
    }
]

export default routes;