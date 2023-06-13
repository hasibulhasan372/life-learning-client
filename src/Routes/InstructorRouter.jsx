import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useVerifyInstructor from "../hooks/useVerifyInstructor";

const InstructorRouter = ({children}) => {
    const {user, loading} = useAuth();
    const [isInstructor, isInstructorLoading] = useVerifyInstructor();
    const location = useLocation();
    if(loading || isInstructorLoading){
        return <span className="loading loading-bars loading-lg mx-auto absolute top-1/2"></span>;
    }
    if(user && isInstructor){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
};

export default InstructorRouter;