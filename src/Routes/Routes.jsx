import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Register/LogIn";
import SignUp from "../pages/Register/SignUp";
import Dashboard from "../layout/dashboard";
import AllUsers from "../pages/DashBoard/Admin/AllUsers/AllUsers"
import AddCourses from "../pages/DashBoard/Instructor/AddCourses/AddCourses";
import AllCourses from "../pages/DashBoard/Admin/AllCourses/AllCourses";
import Courses from "../pages/Courses/Courses";
import InstructorCourses from "../pages/DashBoard/Instructor/InstructorCourses/InstructorCourses";
import SelectedCourses from "../pages/DashBoard/Student/SelectedCourses/SelectedCourses";
import Payment from "../pages/DashBoard/Student/Payment/Payment";
import Instructors from "../pages/Instructors/Instructors";
import PrivateRouter from "./PrivateRouter";
import AdminRouter from "./AdminRouter";
import InstructorRouter from "./InstructorRouter";
import EnrolledCourses from "../pages/DashBoard/Student/EnrolledCourses/EnrolledCourses";
import MyPayment from "../pages/DashBoard/Student/MyPayment/MyPayment";

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
            },
            {
                path:'instructors',
                element: <Instructors></Instructors>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            // For Student 
            {
                path: "selectedCourses",
                element: <SelectedCourses></SelectedCourses>
            },
            {
                path:"payment/:id",
                element:<Payment></Payment>
            },
            {
                path:"enrolledCourses",
                element:<EnrolledCourses></EnrolledCourses>

            },
            {
                path: "myPayment",
                element: <MyPayment></MyPayment>
            },
            // For Instructor 
            {
                path: "addCourses",
                element: <InstructorRouter><AddCourses></AddCourses></InstructorRouter>
            },
            {
                path:"instructorCourses",
                element: <InstructorRouter><InstructorCourses></InstructorCourses></InstructorRouter>
            },
            // For Admin 
            
            {
                path:"allUsers",
                element: <AdminRouter><AllUsers></AllUsers></AdminRouter>
               
            },
            {
                path: "allCourses",
                element:<AdminRouter><AllCourses></AllCourses></AdminRouter>
            }
        ]
    }
]);

export default router;