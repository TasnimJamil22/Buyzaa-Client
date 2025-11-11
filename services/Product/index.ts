import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { TProduct } from "@/types";

//service function will be used in server component-> app routes or pages ,but for client component , this will not work ,at this moment,we need hook
//get all products
export const getAllProducts = async () => {
  // handling nextjs cache validation
  const fetchOption = {
    next: {
      tags: ["product"],
    },
  };
  const res = await fetch(`${envConfig.baseApi}/products`, fetchOption);

  if (!res.ok) {
    throw new Error("failed to fetch products");
  }
  return res.json();
};

//get a single product by id
export const getAProdudctById = async (productId: string): Promise<any> => {
  const res = await fetch(`${envConfig.baseApi}/products/${productId}`);

  if (!res.ok) {
    throw new Error("failed to fetch product");
  }
  return res.json();
};

//create a new product
export const createProduct = async (productData: TProduct) => {
  const payload = { product: productData };
  const { data } = await axiosInstance.post(
    "/products/create-product",
    payload
  );
  return data;
};

//update a product by id
export const updateProduct = async (
  productId: string,
  productData: Partial<TProduct>
) => {
  try {
    const data = await axiosInstance.patch(
      `/products/${productId}`,
      productData
    );
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
//delete a product by id
export const deleteProduct = async (productId: string) => {
  try {
    const { data } = await axiosInstance.delete(`/products/${productId}`);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
