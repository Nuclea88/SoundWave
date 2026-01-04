import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Discover from "../pages/Discover";
import Login from "../pages/Login";
import Layout from "../components/templates/Layout";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "Discover" , element: <Discover /> },
            { path: "Login", element: <Login /> }    
]
    }
]);