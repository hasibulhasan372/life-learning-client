import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../../../../components/Forms/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useSelectCourse from "../../../../hooks/useSelectCourse";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    const {id} = useParams();
    const [selectCourses] = useSelectCourse()
    const [courseFee, setCourseFee] = useState(0);
    useEffect(()=>{
        const getCourse = selectCourses.find(course => course._id === id);
        setCourseFee(getCourse.fee)
    },[id, selectCourses]);
    const fee = parseFloat(courseFee.toFixed(2));
    return (
        <div className="flex justify-center items-center lg:h-screen">
            <div className=" p-4 sm:p-6 md:p-8 lg:p-12 xl:p-14 rounded-lg bg-gray-100 w-full md:w-2/3 lg:w-1/3">
                <h3 className="text-xl md:3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-12 bg-clip-text bg-gradient-to-r from-purple-600 to-red-500 text-transparent animate-bounce "> Payment </h3>
                <div>
                    <Elements stripe={stripePromise}>
                        <Checkout fee={fee}></Checkout>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
