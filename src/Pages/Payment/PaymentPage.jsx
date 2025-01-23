import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const PaymentPage = () => {
  const stripe = useStripe();
  const elemets = useElements();
  const [payError, setPayError] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elemets) {
      return;
    }
    const card = elemets.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setPayError(error.message);
    } else {
        setPayError("");
      console.log(paymentMethod);
    }
  };
  return (
    <div className="w-1/2 mx-auto mt-10">
      <form onSubmit={handleSubmit}>
        <div className="bg-slate-50 p-5 rounded">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <div className="mt-5">
          {payError && <p style={{ color: "red" }}>{payError}</p>}
          {/* {success && <p style={{ color: 'green' }}>{success}</p>} */}
        </div>
        <div className="my-10">
          <button
            className="btn btn-primary w-full"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
