import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const LogIn = () => {
    const { logIn} = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        logIn(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            if(loggedUser?.email){
                toast.success("Login Successfully")
                navigate(from, { replace: true });
            }
        })
        .catch( error => {
            toast.error(error.message)
        })
    };
    return (
        <div className="content-con py-5 sm:py-7 md:py-10 lg:py-20 lg:px-7 bg-[#d9d0dc]">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}  className="bg-white px-6  md:px-8 lg:px-12 md:w-1/2 md:mx-auto lg:w-1/3 lg:mx-0 py-6 md:rounded-md">
                   
                    {/* Email Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    {/* Password Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                     
                    </div>

                    <button className=" text-[#1877f2] hover:underline">Forgot Password ?</button>

                    <button className="btn  mt-4 bg-gradient-to-r from-purple-600 to-red-500 font-bold text-xl md:text-2xl w-full text-white capitalize" type="submit"> Submit</button>
                    <div>
                    <p className="pt-4">Haven't you an account? <Link to="/signUp" className="underline text-sky-500 ">Sign Up</Link></p>
                    </div>
                </form>

                <div>
                    
                </div>


            </div>
        </div>
    );
};

export default LogIn;