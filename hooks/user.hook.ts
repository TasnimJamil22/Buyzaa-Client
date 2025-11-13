// import { useMutation } from "@tanstack/react-query"
// import { createPost } from "../services/post"
// import { toast } from "sonner"

import {
  createUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "@/services/User";
import { TUser } from "@/types";
import { addToast } from "@heroui/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

//get all user
export const useGetAllUser = () => {
  return useQuery({
    queryKey: ["GET-ALL-USER"],
    queryFn: async () => await getAllUser(),
  });
};

// Create user

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userData: TUser) => {
      return await createUser(userData);
    },
    onSuccess: () => {
      // ✅ Refetch the list of users
      queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
      addToast({
        title: "Success",
        description: "User created successfully",
        color: "success",
      });
      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to create user",
        color: "danger",
      });
    },
  });
};

//delete a user by id
// 👇 argument 'userId' comes from the component that called useDeleteUser(userId)
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["DELETE-USER"],
    mutationFn: async (userId: string) => await deleteUser(userId),
    onSuccess: () => {
      // ✅ Invalidate user list so it refetches
      queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
      addToast({
        title: "Success",
        description: "User deleted successfully",
        color: "success",
      });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to delete user ❌",
        color: "danger",
      });
    },
  });
};
//update user
//partial = it makes each property optional
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["UPDATE-USER"],
    mutationFn: async (payload: {
      userId: string;
      updatedData: Partial<TUser> | FormData;
    }) => {
      const { userId, updatedData } = payload;
      return await updateUser(userId, updatedData);
    },
    onSuccess: () => {
      // ✅ Invalidate user list so it refetches
      queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
      addToast({
        title: "Success",
        description: "User updated successfully",
        color: "success",
      });
      // ✅ Invalidate user list so it refetches
      queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to update user ❌",
        color: "danger",
      });
    },
  });
};
