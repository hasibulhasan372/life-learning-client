import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/CLasses/Classes";
import LogIn from "../pages/Register/LogIn";
import SignUp from "../pages/Register/SignUp";

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
]);

export default router;