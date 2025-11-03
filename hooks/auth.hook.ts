import { loginUser, registerUser } from "@/services/AuthService";
import { TUser } from "@/types";
import { addToast } from "@heroui/toast";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

export const useRegisterUser = () => {
  return useMutation({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData: TUser) => await registerUser(userData),
    onSuccess: () => {
      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
      addToast({
        title: "Success",
        description: "User Registered successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to register user",
        color: "danger",
      });
    },
  });
};

export const useLoginUser = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER-LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
      addToast({
        title: "Success",
        description: "User Logged In successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to log in user",
        color: "danger",
      });
    },
  });
};
