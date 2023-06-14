
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import { toast } from "react-hot-toast";
import { imageHosting } from "../../api/savedImage";
import { toast } from "react-hot-toast";
import { savedUser } from "../../api/auth";
import GoogleLogin from "../shared/GoogleLogin";
import { FaSpinner, FaStar } from "react-icons/fa";
import { useState } from "react";

const SignUp = () => {
    const { createUser, updateProfileInfo, logOut } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)


    const onSubmit = (data) => {
        setLoading(true)
        const image = data.photo[0]
        imageHosting(image)
            .then(imageData => {
                const imgUrl = imageData.data.display_url;
                createUser(data.email, data.password)
                    .then(result => {
                        updateProfileInfo(data?.name, imgUrl)
                            .then(() => {
                                if (result.user) {
                                    savedUser(result.user);
                                    toast.success("Sign Up Successfully");
                                    setLoading(false);
                                    logOut();
                                    navigate("/login");

                                }

                            })
                            .catch(error => {
                                setLoading(false);
                                toast.error(error.message);
                            })

                    })
            })

    };
    // Input Field Required Icon 
    const starIcon = <FaStar className="text-red-500 text-[8px]"></FaStar>

    return (
        <div className="content-con py-5 sm:py-7 md:py-10 lg:py-10 bg-[#d9d0dc]">
            <div className="lg:px-7">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-3  md:px-8 lg:px-12 md:w-1/2 md:mx-auto lg:w-1/3 lg:mx-0 py-6 md:rounded-md">
                    <h2 className="text-xl sm:2xl lg:text-3xl font-bold py-3 sm:py-4">Please Sign Up</h2>
                    {/* Name Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Name{starIcon}</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Your name" className="input input-bordered" />
                    </div>
                    {/* Email Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Email{starIcon}</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    {/* Photo Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Your Photo{starIcon}</span>
                        </label>
                        <input type="file" {...register("photo", { required: true })} name="photo" className="" />

                    </div>
                    {/* Phone Number Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number" {...register("number")} name="number" placeholder="Valid number" className="input input-bordered" />
                    </div>
                    {/* Gender Input  */}
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
                    {/* Address Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" {...register("address")} name="address" placeholder="Your address" className="input input-bordered" />
                    </div>
                    {/* Password Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Password{starIcon}</span>
                        </label>
                        <input type="password" {...register("password", { required: true, pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "]){6}/ })} name="password" placeholder="password" className="input input-bordered" />
                        {errors.password && <span className="text-red-500">This field is required at least 6 character, one capital letter, one small letter and a special character</span>}
                    </div>
                    {/* Confirm Password Input  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Confirm Password{starIcon}</span>
                        </label>
                        <input type="password" {...register("confirmPassword", { required: true })} name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" />

                    </div>

                    <button className="btn  mt-4 bg-gradient-to-r from-purple-600 to-red-500 font-bold text-xl md:text-2xl w-full text-white capitalize" type="submit">{loading? <p className="animate-spin"><FaSpinner></FaSpinner></p> : "Submit" }</button>
                    <div>
                        <p className="pt-4">You have already an account? <Link to="/login" className="underline text-sky-500 ">Login</Link></p>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </form>

                <div>

                </div>


            </div>
        </div>
    );
};

export default SignUp;