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
    const token = localStorage.getItem("accessToken"); // get the logged-in user's JWT
    // const { data } = await axiosInstance.post("/checkout/create-order", {
    //   order: orderData, //<--------------------this is so imp . it should sent to backend like this,
    // });
    const { data } = await axiosInstance.post(
      "/checkout/create-order",
      {
        order: orderData,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // attach token
        },
      }
    );
    console.log("Response from backend:", data);
    return data;
  } catch (err: any) {
    console.error("Axios error:", err);
    throw err;
  }
};

//get all orders (for admin only)
export const getAllOrders = async () => {
  try {
    const { data } = await axiosInstance.get("/checkout");
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

//get my orders (for logged in user)
export const getMyOrders = async () => {
  try {
    const { data } = await axiosInstance.get("/checkout/my-orders");
    return data;
  } catch (err: any) {
    console.log(err.message);
    throw new Error(err.message); // ✅ React Query will call onError instead of onSuccess
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

//delete an order
export const deleteOrder = async (orderId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/checkout/${orderId}`);
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};
