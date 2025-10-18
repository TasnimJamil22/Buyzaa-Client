import axiosInstance from "@/lib/AxiosInstance";
import { TOrder } from "@/types";
import { FieldValues } from "react-hook-form";

// export const createOrder = async (orderData: TOrder) => {
//   const { data } = await axiosInstance.post(
//     "/checkout/create-order",
//     orderData
//   );
//   return data;
// };
export const createOrder = async (orderData: TOrder) => {
  try {
    const { data } = await axiosInstance.post("/checkout/create-order", {
      order: orderData, //<--------------------this is so imp . it should sent to backend like this,
    });
    console.log("Response from backend:", data);
    return data;
  } catch (err: any) {
    console.error("Axios error:", err);
    throw err;
  }
};

//get all orders
export const getAllOrders = async () => {
  try {
    const { data } = await axiosInstance.get("/checkout");
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

//get a single order
export const getASingleOrder = async (orderId: string) => {
  try {
    const { data } = await axiosInstance.get(`/checkout/${orderId}`);
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
