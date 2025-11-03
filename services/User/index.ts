"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { TUser } from "@/types";
import { revalidateTag } from "next/cache";

//get all user
//data fetching : using fetch
// they get arguments from whatever function calls them
export const getAllUser = async () => {
  const res = await fetch(`${envConfig.baseApi}/users`);

  if (!res.ok) {
    throw new Error("failed to fetch users");
  }
  return res.json();
};
//get a single user
//data fetching : using fetch
export const getASingleUser = async (userId: string) => {
  const res = await fetch(`${envConfig.baseApi}/users/${userId}`);

  if (!res.ok) {
    throw new Error("failed to fetch user");
  }
  return res.json();
};

//Create user service
export const createUser = async (userData: TUser) => {
  try {
    // Wrap userData in { user: ... } as backend expects
    const payload = { user: userData };

    const { data } = await axiosInstance.post("/users/create-user", payload);

    return data;
  } catch (error: any) {
    console.error(
      "Error creating user:",
      error.response?.data || error.message
    );
    throw new Error(error.response?.data?.message || "Failed to create user");
  }
};
//data fetching : using axiosInstance
export const deleteUser = async (userId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/users/${userId}`);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

//update user
export const updateUser = async (
  userId: string,
  updatedData: Partial<TUser>
) => {
  try {
    const data = await axiosInstance.patch(`/users/${userId}`, updatedData);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
