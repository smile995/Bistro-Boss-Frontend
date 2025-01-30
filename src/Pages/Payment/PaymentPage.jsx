/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useBistro from "../../Hooks/useBistro";
import Swal from "sweetalert2";
const PaymentPage = () => {
  const stripe = useStripe();
  const elemets = useElements();
  const { user } = useBistro();
  const [payError, setPayError] = useState();
  const [clientSecret, setClientSecret] = useState();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { amount: totalPrice })
      .then((res) => {
        setClientSecret(res?.data?.clientSecret);
      });
  }, [axiosSecure, totalPrice]);
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
      setPayError(error?.message);
    } else {
      setPayError("");
    }

    const { paymentIntent, error: confirlError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirlError) {
      setPayError(confirlError.message);
    } else {
      if (paymentIntent.status == "succeeded") {
        const paymentInfo = {
          name: user.displayName,
          email: user.email,
          price: totalPrice,
          date: new Date(),
          status: "pending",
          transactionId: paymentIntent.id,
          cartIds: cart.map((item) => item._id),
          foodIds: cart.map((item) => item.foodId),
        };
        const res = await axiosSecure.post("/payments", paymentInfo);
        if (
          res?.data?.paymentResult?.insertedId &&
          res?.data?.deletedResult?.deletedCount > 0
        ) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Payment Successfull",
            text: `Transection Id: ${paymentIntent.id}`,
            footer: `Your Order id: ${res?.data?.paymentResult?.insertedId}`,
          });
        }
      }
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
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
