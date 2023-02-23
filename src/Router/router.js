import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home/Home";
import ShopKargo from "../Pages/ShopKargo";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register/index"




const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/Shop-Kargo",
        element: <ShopKargo />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },

    {
        path: "/Login",
        element: <LoginPage />,
    },
    {
        path : '/register',
        element : <RegisterPage />
    }

]);

export default router