import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";


const Checkout = ({price,paymentCourse, refetch}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState()
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState("")
    // TODO:Payment Complete 
    useEffect(()=>{
        if(price > 0){
            axiosSecure.post("/create-payment-intent", {price})
            .then(res=> {
                setClientSecret(res.data.clientSecret)
            })
        }
    },[price, axiosSecure])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        console.log(card);
        
        const { error} = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            setCardError(error.message)
        }
       
        setProcessing(true)
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "unknown",
                    name: user?.displayName || "anonymous"
                },
              },
            },
          );
          if (confirmError) {
            setCardError(confirmError)
        }
        setProcessing(false)
        if(paymentIntent.status === "succeeded"){
            setTransactionId(paymentIntent.id);
            const paymentInfo = {
                email: user?.email,
                price,
                date: new Date(),
                transactionId: paymentIntent.id,
                enrolledCourseId: paymentCourse._id,
                courseId: paymentCourse.courseId,
                courseName: paymentCourse.name,
                status: "paid",
                image: paymentCourse.image,

            }
            axiosSecure.post("/payment", paymentInfo)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    toast.success("You have enrolled the courses successfully");
                    axiosSecure.delete(`/selectedCourses/${paymentCourse._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                        }
                    })
                }
            })
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || processing} 
                className="btn btn-sm btn-info capitalize font-bold text-white mt-4">
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 mt-2">{cardError}</p>
            }
            {transactionId && <p className="mt-3">Success: Your Transaction is completed: <span className="text-green-500 font-medium">{transactionId}</span> </p> }
            
        </>
    );
};

export default Checkout;