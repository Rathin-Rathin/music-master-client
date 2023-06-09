import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/HomePage/Home/Home";
import SignUp from "../pages/RegistrationPage/SignUp";
import Login from "../pages/LoginPage/Login";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Dashboard from "../pages/DashboardPage/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>
            }, {
                path: 'home',
                element:<Home/>
            }, {
                path: 'dashboard',
                element:<PrivateRoutes><Dashboard/></PrivateRoutes>
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

