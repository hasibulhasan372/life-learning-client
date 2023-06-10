import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/CLasses/Classes";
import LogIn from "../pages/Register/LogIn";
import SignUp from "../pages/Register/SignUp";
import Dashboard from "../layout/dashboard";
import AllUsers from "../pages/DashBoard/Admin/AllUsers/AllUsers"
import AddCourses from "../pages/DashBoard/Instructor/AddCourses/AddCourses";
import AllCourses from "../pages/DashBoard/Admin/AllCourses/AllCourses";

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
                element: <AllUsers></AllUsers>
               
            },
            {
                path: "addCourses",
                element: <AddCourses></AddCourses>
            },
            // For Admin 
            {
                path: "allCourses",
                element:<AllCourses></AllCourses>
            }
        ]
    }
]);

export default router;