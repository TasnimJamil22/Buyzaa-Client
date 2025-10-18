"use client";

import PaymentForm from "@/components/UI/Payment/PaymentForm";
import envConfig from "@/config/envConfig";
import { useGetASingleOrder } from "@/hooks/checkout.hook";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { use } from "react";

const stripePromise = loadStripe(envConfig.paymentKey as string);

export default function PaymentDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = use(params);
  const { data, isLoading } = useGetASingleOrder(orderId);
  const order = data?.data;

  if (isLoading) return <p>Loading payment details...</p>;
  if (!order?._id) return <p>Order not found.</p>;

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm key={order._id} order={order} isLoading={isLoading} />
    </Elements>
  );
}

// "use client";

// import PaymentForm from "@/components/UI/Payment/PaymentForm";
// import envConfig from "@/config/envConfig";
// import { useGetASingleOrder } from "@/hooks/checkout.hook";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import React, { use } from "react";

// // const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
// const stripePromise = loadStripe(envConfig.paymentKey as string);
// export default function PaymentDetailPage({
//   params,
// }: {
//   params: Promise<{ orderId: string }>;
// }) {
//   // ✅ unwrap params (Next.js 15+)
//   const { orderId } = use(params); // ✅ unwraps the promise
//   console.log(orderId);
//   const { data, isLoading } = useGetASingleOrder(orderId);
//   const order = data?.data || [];
//   return (
//     <Elements stripe={stripePromise}>
//       {/* <PaymentForm key={order?._id} order={order} /> */}
//       {order && (
//         <PaymentForm key={order?._id} order={order} isLoading={isLoading} />
//       )}
//     </Elements>
//   );
// }
