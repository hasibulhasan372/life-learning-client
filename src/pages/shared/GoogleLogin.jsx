import { toast } from "react-hot-toast";
import { savedUser } from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            if(result.user){
                savedUser(result.user)
                toast.success("Login Successfully")
                navigate(from, { replace: true });
            }
        })
        .catch(error => {
            toast.error(error.message)
        })
    }
    return (
        <div className="mt-4 md:mt-6">
            <button
            onClick={handleGoogle}
            className="border py-1 md:py-2 w-full text-center border-slate-500 rounded">
            <img src="https://i.ibb.co/pWN7jnN/google-logo-png-google-sva-scholarship-20.png" alt="Google" className="  w-[60px] lg:w-[80px] mx-auto" />
            </button>
        </div>
    );
};

export default GoogleLogin;
