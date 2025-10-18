"use client";
import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { createPaymentIntent } from "@/services/Payment";
import { TOrder } from "@/types";

import { Button } from "@heroui/button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

interface IProps {
  order: TOrder;
  isLoading: boolean;
}
export default function PaymentForm({ order, isLoading }: IProps) {
  console.log("totalamout", order.totalAmount);
  console.log(order);
  const [error, setError] = useState<string | undefined>("");
  const stripe = useStripe();
  const elements = useElements();
  // const onSubmit: SubmitHandler<any> = async (data) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements?.getElement(CardElement);
    if (!card) {
      return;
    }

    //use your card
    //step-1 validate the card
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      card, //card data
    });
    if (error) {
      setError(error?.message);
      // console.log("error:", error);
    } else {
      console.log("payment method:", paymentMethod);
    }
    //setp:2 create payment intent(calling it from payment services )
    const orderId = order?._id;
    //// convert dollars to cents
    const amount = order.totalAmount;
    const amountInCents = amount * 100;
    // console.log(amountInCents);
    // createPaymentIntent(amountInCents, orderId as string);
    //This calls your backend.

    //Backend creates a PaymentIntent in Stripe.

    //Stripe responds with a clientSecret, which is used to confirm the payment.
    //Important: You must await this call and store the clientSecret:
    const clientSecret = await createPaymentIntent(
      amountInCents,
      orderId as string
    );
    //Step 3: Confirm the payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card, // the CardElement from your form
          billing_details: {
            name: order?.name,
            email: order?.email,
          },
        },
      });
    //🔹 Step 4: Handle success or error
    if (confirmError) {
      setError(confirmError.message);
    } else if (paymentIntent?.status === "succeeded") {
      setError("");
      console.log("✅ Payment successful!", paymentIntent);
      //step-5 mark order paid also create payment history
    }
  };
  //
  if (isLoading) {
    return <div>Loading.......</div>;
  }

  return (
    <div>
      <div>
        {/* <BZForm onSubmit={onsubmit}> */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto   border border-gray-200 rounded-xl p-5 shadow-sm space-y-5"
        >
          <CardElement />

          {/* <BZInput /> */}
          <Button type="submit" disabled={!stripe}>
            Confirm Order Payment ${order?.totalAmount}
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>

        {/* </BZForm> */}
      </div>
    </div>
  );
}
