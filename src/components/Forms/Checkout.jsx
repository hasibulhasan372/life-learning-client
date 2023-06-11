import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const Checkout = ({fee}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    // TODO:Payment Complete 
    console.log(fee)
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
                <button type="submit" disabled={!stripe} className="btn btn-sm btn-info capitalize font-bold text-white mt-4">
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