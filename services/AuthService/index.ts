"use server";
import axiosInstance from "@/lib/AxiosInstance";
import { TUser } from "@/types";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  const { data } = await axiosInstance.post("/auth/register", userData);

  if (data.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", data?.data?.accessToken);
    cookieStore.set("refreshToken", data?.data?.refreshToken);
    // cookies().set("accessToken", data?.data?.accessToken);
  }
  return data;
};
