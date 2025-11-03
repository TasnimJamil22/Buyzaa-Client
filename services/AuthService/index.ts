"use server";
import axiosInstance from "@/lib/AxiosInstance";
import { TUser } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: TUser) => {
  const { data } = await axiosInstance.post("/auth/register", userData);
  console.log(data);

  if (data.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", data?.data?.accessToken);
    cookieStore.set("refreshToken", data?.data?.refreshToken);
    // cookies().set("accessToken", data?.data?.accessToken);
  }
  return data;
};

export const loginUser = async (userData: FieldValues) => {
  const { data } = await axiosInstance.post("/auth/login", userData);
  if (data.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", data?.data?.accessToken);
    cookieStore.set("refreshToken", data?.data?.refreshToken);
  }
  return data;
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  let decodedToken = null;
  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role,
      status: decodedToken.status,
    };
  }
  return decodedToken;
};

export const logoutUser = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
};
