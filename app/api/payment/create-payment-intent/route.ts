import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripeSecret = process.env.STRIPE_SECRET_KEY;

if (!stripeSecret) {
  throw new Error("❌ STRIPE_SECRET_KEY is missing in env!");
}

const stripe = new Stripe(stripeSecret, { apiVersion: "2024-06-20" as any });

export async function POST(req: NextRequest) {
  const { amountInCents } = await req.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return NextResponse.json({ clientSecret: paymentIntent.client_secret });
}

//
// import Stripe from "stripe";
// import { NextRequest, NextResponse } from "next/server";

// import envConfig from "@/config/envConfig";

// const stripe = new Stripe(envConfig.paymentGatewayKey as string, {
//   apiVersion: "2024-06-20" as any,
// });

// export async function POST(req: NextRequest) {
//   try {
//     // Get amount from frontend
//     const body = await req.json();
//     const { amountInCents, orderId } = body;

//     if (!amountInCents) {
//       return NextResponse.json(
//         { error: "Amount is required" },
//         { status: 400 }
//       );
//     }

//     // ✅ Create a payment intent

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amountInCents, //amount in cents
//       currency: "usd",
//       payment_method_types: ["card"],
//     });

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }
