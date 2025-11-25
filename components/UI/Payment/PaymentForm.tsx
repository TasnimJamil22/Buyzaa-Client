"use client";
import { Button } from "@heroui/button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

import PaymentSuccess from "./SuccessfulPayment";

import { useUser } from "@/context/user.provider";
import { useCreatePaymentRecord } from "@/hooks/payment.hook";
import { createPaymentIntent } from "@/services/Payment";
import { TOrder, TPayment } from "@/types";

interface IProps {
  order: TOrder;
  isLoading: boolean;
}
export default function PaymentForm({ order, isLoading }: IProps) {
  const { user } = useUser();
  const { mutate: handleCreatePaymentRecord, isSuccess } =
    useCreatePaymentRecord();

  console.log("totalamout", order.totalAmount);
  console.log(order);
  const [error, setError] = useState<string | undefined>("");
  const stripe = useStripe();
  const elements = useElements();
  const [transactionId, setTransactionId] = useState<string | null>(null);
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
    const cost = order.totalAmount;
    const amount = cost * 100;
    // console.log(amountInCents);
    // createPaymentIntent(amountInCents, orderId as string);
    //This calls your backend.

    //Backend creates a PaymentIntent in Stripe.

    //Stripe responds with a clientSecret, which is used to confirm the payment.
    //Important: You must await this call and store the clientSecret:
    const clientSecret = await createPaymentIntent(amount, orderId as string);
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

      //step-5 mark order paid also create payment history
      if (paymentIntent.status === "succeeded") {
        console.log("✅ Payment successful!", paymentIntent);
        const transactionId = paymentIntent.id;
        const paymentData: TPayment = {
          orderId: orderId as string,
          email: user?.email as string,
          amount,
          currency: paymentIntent.currency,
          transactionId: transactionId,
          paymentMethod: paymentIntent.payment_method_types,
          status: paymentIntent.status,
          isPaid: true,
          userId: user?._id as string,
        };

        console.log(paymentData);
        handleCreatePaymentRecord(paymentData);
        setTransactionId(paymentIntent.id); // store transaction id
      }
    }
  };

  //
  if (isLoading) {
    return <div>Loading.......</div>;
  }

  return (
    <>
      {isSuccess ? (
        <div>
          {isSuccess && <PaymentSuccess transactionId={transactionId!} />}
        </div>
      ) : (
        <div>
          <div>
            {/* <BZForm onSubmit={onsubmit}> */}
            <form
              className="max-w-md mx-auto   border border-gray-200 rounded-xl p-5 shadow-sm space-y-5"
              onSubmit={handleSubmit}
            >
              <CardElement />

              {/* <BZInput /> */}

              <Button disabled={!stripe} type="submit">
                Confirm Order Payment ${order?.totalAmount}
                {/* {isSuccess && (
              <BZModal
                buttonText={`Confirm Order Payment $${order?.totalAmount}`}
                body={isSuccess ? <PaymentSuccess /> : undefined}
              />
            )} */}
              </Button>

              {error && <p className="text-red-500">{error}</p>}
            </form>

            {/* </BZForm> */}
          </div>
        </div>
      )}
    </>
  );
}
