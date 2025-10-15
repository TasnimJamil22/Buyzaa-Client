"use client";
import CheckoutForm from "@/components/UI/Checkout/CheckoutForm";
import PaymentForm from "@/components/UI/Payment/PaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
export default function Payment() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
