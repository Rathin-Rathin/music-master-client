import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/HomePage/Home/Home";
import SignUp from "../pages/RegistrationPage/SignUp";
import Login from "../pages/LoginPage/Login";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import Dashboard from "../pages/DashboardPage/Dashboard/Dashboard";
import Classes from "../pages/ClassesPage/Classes";
import ManageClasses from "../pages/DashboardPage/AdminDashboard/ManageClasses";
import ManageUsers from "../pages/DashboardPage/AdminDashboard/ManageUsers";
import Payment from "../pages/DashboardPage/StudentDashboard/Payment/Payment";
import SelectedClasses from "../pages/DashboardPage/StudentDashboard/MyClasses/SelectedClasses";
import EnrolledClasses from "../pages/DashboardPage/StudentDashboard/MyClasses/EnrolledClasses";
import AddAClass from "../pages/DashboardPage/InstructorDashboard/AddAClass";
import InstructorClasses from "../pages/DashboardPage/InstructorDashboard/InstructorClasses";
import InsHome from "../pages/DashboardPage/InstructorDashboard/InsHome";

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
            },
            {
                path: '/classes',
                element:<PrivateRoutes><Classes/></PrivateRoutes>
            },
            
            
        ]
    },
    {
        path: 'dashboard',
        element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
        children: [
            {
                path: 'dashboard',
                element:<InsHome/>
            }
            ,
            {
                path: 'adminHome',
                element:<ManageClasses/>
            }, {
                path: 'manageUsers',
                element:<ManageUsers/>
            },
            {
                path: 'addClass',
                element:<AddAClass/>
            },
            {
                path:'myClasses',
                element:<InstructorClasses/>
            },
            {
                path: '/dashboard/payment/:id',
                element:<Payment/>
            }, {
                path: 'selectedClasses',
                element:<SelectedClasses/>
            },{
                path: 'enrolledClasses',
                element:<EnrolledClasses/>
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

