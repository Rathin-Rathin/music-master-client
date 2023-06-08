import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/HomePage/Home/Home";
import SignUp from "../pages/RegistrationPage/SignUp";
import Login from "../pages/LoginPage/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>
            }
        ]
    },
    {
        path:'signUp',
        element:<SignUp/>
    },
    {
        path:'login',
        element:<Login/>
    }
]);

