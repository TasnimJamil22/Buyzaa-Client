import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { TCategory } from "@/types";
//get all categories
export const getAllCategories = async () => {
  const { data } = await axiosInstance.get("/categories");

  return data;
};
//get a single category: by fetch
export const getASingleCategory = async (categoryId: string): Promise<any> => {
  const res = await fetch(`${envConfig.baseApi}/categories/${categoryId}`);

  if (!res.ok) {
    throw new Error("failed to fetch category");
  }
  return res.json();
};
//create category
export const createCategory = async (categoryData: TCategory) => {
  const payload = { category: categoryData };
  const data = await axiosInstance.post("/categories/create-category", payload);
  return data;
};

//delete a category by id
export const deleteCategory = async (categoryId: string) => {
  const { data } = await axiosInstance.delete(`/categories/${categoryId}`);
  return data;
};
//update category by id
export const updateCategory = async (
  categoryId: string,
  updatedCategory: Partial<TCategory>
) => {
  const data = await axiosInstance.patch(
    `/categories/${categoryId}`,
    updatedCategory
  );
  return data;
};
