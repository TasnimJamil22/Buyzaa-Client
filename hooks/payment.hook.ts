import { addToast } from "@heroui/toast";
import { useMutation, useQuery } from "@tanstack/react-query";

import {
  createPaymentRecord,
  getAllPayments,
  getMyPayments,
} from "@/services/Payment";
import { TPayment } from "@/types";
//create payment record
export const useCreatePaymentRecord = () => {
  return useMutation({
    mutationKey: ["CREATE-PAYMENT"],
    mutationFn: async (paymentData: TPayment) => {
      return await createPaymentRecord(paymentData);
    },
    onSuccess: () => {
      addToast({
        title: "Success",
        description: "Payment created successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to create payment",
        color: "danger",
      });
    },
  });
};
//get All payments
export const useGetAllPayments = () => {
  return useQuery({
    queryKey: ["GET-All-PAYMENTS"],
    queryFn: async () => {
      return await getAllPayments();
    },
    onSuccess: () => {
      addToast({
        title: "Success",
        description: "Payments retrieved successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to retrieve payments",
        color: "danger",
      });
    },
  });
};
//get My payments
export const useGetMyPayments = () => {
  return useQuery({
    queryKey: ["GET-MY-PAYMENTS"],
    queryFn: async () => {
      return await getMyPayments();
    },
    onSuccess: () => {
      addToast({
        title: "Success",
        description: "My Payments retrieved successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to retrieve my payments",
        color: "danger",
      });
    },
  });
};
