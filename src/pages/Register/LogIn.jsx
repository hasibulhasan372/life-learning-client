import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="content-con py-5 sm:py-7 md:py-10 lg:py-32 bg-[#d9d0dc]">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}  className="bg-white md:mx-6 lg:px-12 md:w-1/2 md:p-6 md:rounded-md">
                   
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