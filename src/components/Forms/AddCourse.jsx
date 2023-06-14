import { useForm } from "react-hook-form";
import { FaSpinner, FaStar } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";


const AddClass = () => {
    const { user } = useAuth()
    const { register, handleSubmit } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const [loading, setLoading] = useState(false)

    const onSubmit = data => {
        setLoading(true)
        const { availableSeat, className, classPhoto, instructorEmail, instructorName, price } = (data);
        const classInfo = {courseName: className,
            instructorName, 
            instructorEmail, 
            image:classPhoto, 
            fee: parseFloat(price), 
            seats: parseInt(availableSeat),
            status:"pending",
            enrolled:0,
        }
        axiosSecure.post('/courses',classInfo)
        .then(res => {
            if(res.data.insertedId){
                toast.success("Your Course in uploaded and wait for the admin confirmation");
                setLoading(false)
            }
        })
    };

    // Input Field Required Icon 
    const starIcon = <FaStar className="text-red-500 text-[8px]"></FaStar>

    return (
        <div className="p-3 md:px-8 md:py-8 lg:px-12 lg:py-12 border rounded-md">
            <h1 className=" text-xl md:text-3xl font-semibold md:font-bold text-center">Add Course</h1>
            <div className="mt-2 md:mt-4">
                <form onSubmit={handleSubmit(onSubmit)} className="md:grid md:grid-cols-2 md:gap-4">
                    {/* Class Name   */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Course Name{starIcon}</span>
                        </label>
                        <input type="text" {...register("className", { required: true })} name="className" placeholder="Class name" className="input input-bordered" />
                    </div>
                    {/* Instructor Name   */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Instructor Name</span>
                        </label>
                        <input type="text" {...register("instructorName", { required: true })} name="instructorName" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    {/* Add Image  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Course Photo URL{starIcon}</span>
                        </label>
                        <input type="url" {...register("classPhoto", { required: true })} name="classPhoto" placeholder="Please put image url" className="input input-bordered" />
                    </div>
                    {/* Instructor Email  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Instructor Email</span>
                        </label>
                        <input type="email" {...register("instructorEmail", { required: true })} name="instructorEmail" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    {/*Available Seat */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Available Seats{starIcon}</span>
                        </label>
                        <input type="number" {...register("availableSeat", { required: true })} name="availableSeat" placeholder="Available Seats" className="input input-bordered" />
                    </div>
                    {/*Class fee */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text flex">Course Fee{starIcon}</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} name="price" placeholder="Course Fee" className="input input-bordered" />
                    </div>

                    {/* Submit  */}
                    <div className="w-full py-2 rounded-lg text-center mx-auto col-span-2 md:mt-4">
                    <button className="btn  mt-4 bg-gradient-to-r from-purple-600 to-red-500 font-bold text-xl md:text-2xl w-full text-white capitalize" type="submit">{loading? <p className="animate-spin"><FaSpinner></FaSpinner></p> : "Submit" } </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClass;
