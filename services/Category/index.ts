import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";

export const getAllCategories = async () => {
  const { data } = await axiosInstance.get(`${envConfig.baseApi}/categories`);
  return data;
};
