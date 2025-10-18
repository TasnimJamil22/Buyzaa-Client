// import axiosInstance from "@/lib/AxiosInstance";

import axios from "axios";

// 2️⃣ Create payment intent (calls your server route)
export const createPaymentIntent = async (
  amountInCents: number,
  orderId: string
) => {
  try {
    //we are sending ..to backend/api
    //⚠ Don’t use your axiosInstance (it points to the backend server, not Next.js).
    //Use a plain axios call — Next.js routes run on the same origin (port 3000).
    const { data } = await axios.post("/api/payment/create-payment-intent", {
      amountInCents,
      orderId,
    });
    const clientSecret = data.clientSecret;
    console.log("res from intent", data);
    return data.clientSecret; // client secret from backend
  } catch (err: any) {
    console.log(err.message);
    return null;
  }
};
