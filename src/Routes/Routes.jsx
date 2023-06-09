import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/CLasses/Classes";
import LogIn from "../pages/Register/LogIn";
import SignUp from "../pages/Register/SignUp";
import Dashboard from "../layout/dashboard";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddClasses from "../pages/DashBoard/AddClasses/AddClasses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "classes",
                element: <Classes></Classes>
            },
            {
                path: "login",
                element: <LogIn></LogIn>
            }
            ,
            {
                path: "signUp",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path:"allUsers",
                element:<AllUsers></AllUsers>
            },
            {
                path: "addClass",
                element: <AddClasses></AddClasses>
            }
        ]
    }
]);

export default router;