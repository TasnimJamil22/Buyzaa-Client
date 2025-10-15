"use client";
import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { Button } from "@heroui/button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { Onest } from "next/font/google";
import { SetStateAction, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function PaymentForm() {
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
  };
  return (
    <div>
      <div>
        {/* <BZForm onSubmit={onsubmit}> */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-5"
        >
          <CardElement />

          {/* <BZInput /> */}
          <Button type="submit" disabled={!stripe}>
            Pay
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>

        {/* </BZForm> */}
      </div>
    </div>
  );
}
