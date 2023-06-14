import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import GoogleLogin from "../shared/GoogleLogin";
import { FaEye, FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { Slide } from "react-awesome-reveal";


const LogIn = () => {
    const { logIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        setLoading(true)
        logIn(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            if(loggedUser?.email){
                toast.success("Login Successfully")
                navigate(from, { replace: true });
                reset();
                setLoading(false);
            }
        })
        .catch( error => {
            toast.error(error.message);
            setLoading(false)
        })
    };
    
    return (
        <Slide triggerOnce>
            <div className="content-con py-5 sm:py-7 md:py-10 lg:py-20 lg:px-7 bg-[#d9d0dc] ">
            <div className="relative w-full md:2/3 lg:w-1/3">
                <form onSubmit={handleSubmit(onSubmit)}  className="bg-white px-6  md:px-8 lg:px-12 md:mx-auto lg:w-full lg:mx-0 py-6 md:rounded-md ">
                   
                    {/* Email Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    {/* Password Input  */}
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={open? "text" : "password"} {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered " />
                    </div>
                    
                    {/* Submit Button   */}
                    <button className="btn  mt-4 bg-gradient-to-r from-purple-600 to-red-500 font-bold text-xl md:text-2xl w-full text-white capitalize" type="submit">{loading? <p className="animate-spin"><FaSpinner></FaSpinner></p> : "Submit" } </button>
                    <div>
                    <p className="pt-4">Haven't you an account? <Link to="/signUp" className="underline text-sky-500 ">Sign Up</Link></p>
                    <GoogleLogin></GoogleLogin>
                    </div>
                </form>
                <button className="absolute top-40 right-16 z-20" onClick={()=>setOpen(!open)}><FaEye></FaEye> </button>
                
            </div>
        </div>
        </Slide>
    );
};

export default LogIn;