import { createPaymentRecord } from "@/services/Payment";
import { TPayment } from "@/types";
import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";

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
