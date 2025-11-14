import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getASingleOrder,
  getMyOrders,
} from "@/services/Checkout";
import { TOrder } from "@/types";
import { addToast } from "@heroui/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateOrder = () => {
  return useMutation({
    mutationKey: ["CREATE-ORDER"],
    mutationFn: async (orderData: TOrder) => {
      return await createOrder(orderData);
    },
    onSuccess: () => {
      addToast({
        title: "Success",
        description: "Order created successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to create order",
        color: "danger",
      });
    },
  });
};

//get all orders (for admin only)
export const useGetAllOrders = () => {
  return useQuery({
    queryKey: ["GET-ALL-ORDERS"],
    queryFn: async () => {
      return await getAllOrders();
    },
    onSuccess: () => {
      addToast({
        title: "Success",
        description: "Orders retrieved successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to retrieve orders",
        color: "danger",
      });
    },
  });
};
//get my orders (only for logged in user)
export const useGetMyOrders = () => {
  return useQuery({
    queryKey: ["GET-MY-ORDERS"],
    queryFn: async () => {
      return await getMyOrders();
    },
    onSuccess: (res) => {
      if (!res || !res.data) return; // safety check
      addToast({
        title: "Success",
        description: "My Orders retrieved successfully",
        color: "success",
      });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to retrieve my orders",
        color: "danger",
      });
    },
  });
};

//get a single order
export const useGetASingleOrder = (orderId: string) => {
  return useQuery({
    queryKey: ["GET-SINGLE-ORDER", orderId], // include orderId in key
    queryFn: async () => {
      return await getASingleOrder(orderId);
    },
    onSuccess: () => {
      addToast({
        title: "Success",
        description: "Order retrieved successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to retrieve order",
        color: "danger",
      });
    },
  });
};

//delete an order hook
export const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["DELETE-AN-ORDER"],
    mutationFn: async (orderId: string) => {
      return await deleteOrder(orderId);
    },
    onSuccess: () => {
      addToast({
        title: "Success",
        description: "Order deleted successfully",
        color: "success",
      });

      // ✅ Refetch the list of orders
      queryClient.invalidateQueries({ queryKey: ["GET-ALL-ORDERS"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to delete order",
        color: "danger",
      });
    },
  });
};
