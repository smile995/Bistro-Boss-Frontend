import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import PaymentPage from "./PaymentPage";
const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);
console.log(import.meta.env.VITE_stripe_pk);

const Payment = () => {
  return (
    <div>
      <div>
        <SectionTitle subheading="Pay For Eat" heading={"Payment System"} />
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <PaymentPage />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
