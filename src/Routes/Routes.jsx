import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Register/LogIn";
import SignUp from "../pages/Register/SignUp";
import Dashboard from "../layout/dashboard";
import AllUsers from "../pages/DashBoard/Admin/AllUsers/AllUsers"
import AddCourses from "../pages/DashBoard/Instructor/AddCourses/AddCourses";
import AllCourses from "../pages/DashBoard/Admin/AllCourses/AllCourses";
import InstructorCourses from "../pages/DashBoard/Instructor/InstructorCourses/InstructorCourses";
import Courses from "../pages/CLasses/Courses";
import SelectedCourses from "../pages/DashBoard/Student/SelectedCourses/SelectedCourses";

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
                path: "courses",
                element: <Courses></Courses>
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
                path: "selectedCourses",
                element: <SelectedCourses></SelectedCourses>
            },
            // For Instructor 
            {
                path: "addCourses",
                element: <AddCourses></AddCourses>
            },
            {
                path:"instructorCourses",
                element: <InstructorCourses></InstructorCourses>
            },
            // For Admin 
            
            {
                path:"allUsers",
                element: <AllUsers></AllUsers>
               
            },
            {
                path: "allCourses",
                element:<AllCourses></AllCourses>
            }
        ]
    }
]);

export default router;