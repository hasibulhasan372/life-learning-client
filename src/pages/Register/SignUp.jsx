import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="content-con py-5 sm:py-7 md:py-10 lg:py-10 bg-[#d9d0dc]">
            <div className="lg:px-7">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-6  md:px-8 lg:px-12 md:w-1/2 md:mx-auto lg:w-1/3 lg:mx-0 py-6 md:rounded-md">
                            <h2 className="text-xl sm:2xl lg:text-3xl font-bold py-3 sm:py-4">Please Sign Up</h2>
                    {/* Name Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: false })} name="name" placeholder="Your name" className="input input-bordered" />
                    </div>
                    {/* Email Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    {/* Email Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Photo</span>
                        </label>
                        <input type="file" {...register("photo", { required: false })} name="photo" className="" />
                    </div>
                    {/* Phone Number Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number" {...register("number", { required: false })} name="number" placeholder="Valid number" className="input input-bordered" />
                    </div>
                    {/* Phone Number Input  */}
                    <div className="form-control w-4/12 sm:w-2/12 md:w-4/12">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <select name="gender" {...register("gender")} className="border py-1 px-2 rounded-md">
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                     {/* Name Input  */}
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" {...register("address", { required: false })} name="address" placeholder="Your address" className="input input-bordered" />
                    </div>  
                    {/* Password Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true, pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "]){6}/ })} name="password" placeholder="password" className="input input-bordered" />
                        {errors.password && <span className="text-red-500">This field is required at least 6 character, one capital letter, one small letter and a special character</span>}
                    </div>
                    {/* Confirm Password Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" {...register("confirmPassword", { required: true})} name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" />
                        
                    </div>

                    <button className="btn  mt-4 bg-gradient-to-r from-purple-600 to-red-500 font-bold text-xl md:text-2xl w-full text-white capitalize" type="submit"> Submit</button>
                    <div>
                        <p className="pt-4">You have already an account? <Link to="/login" className="underline text-sky-500 ">Login</Link></p>
                    </div>
                </form>

                <div>

                </div>


            </div>
        </div>
    );
};

export default SignUp;