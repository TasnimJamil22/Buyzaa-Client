import envConfig from "@/config/envConfig";
import { TProduct } from "@/types";

//get all products
export const getAllProducts = async () => {
  //handling nextjs cache validation
  //   const fetchOption = {
  //     next: {
  //       tags: ["product"],
  //     },
  //   };
  const res = await fetch(`${envConfig.baseApi}/products`);

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
