import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const Checkout = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('')
    // TODO:Payment Complete 
    useEffect(()=>{
        if(price > 0){
            axiosSecure.post("/create-payment-intent", {price})
            .then(res=> {
                console.log(res.data.clientSecret)
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

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError("");
            console.log(paymentMethod)
        }
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
            console.log("error", confirmError)
            setCardError(confirmError)
        }
       

    }
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
                <button type="submit" disabled={!stripe || !clientSecret} 
                className="btn btn-sm btn-info capitalize font-bold text-white mt-4">
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 mt-2">{cardError}</p>
            }
        </>
    );
};

export default Checkout;