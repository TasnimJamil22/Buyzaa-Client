import { addToast } from "@heroui/toast";
import { useMutation, useQuery } from "@tanstack/react-query";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "@/services/Product";
import { TProduct } from "@/types";

//create a product
export const useCreateProduct = () => {
  // const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["CREATE-PRODUCT"],
    mutationFn: async (payload: { products: TProduct }) => {
      const { products } = payload;

      return await createProduct(products);
    },
    onSuccess: () => {
      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
      addToast({
        title: "Success",
        description: "Product created successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to create product",
        color: "danger",
      });
    },
  });
};
//update a product
export const useUpdateProduct = () => {
  // const queryClient = useQueryClient();
  return useMutation({
    //payload came from component --- UpdateProductForm (mutate:handleUpdateProduct(from here))
    //and returns to services ---- Product-> index.ts
    //and  productId, updatedData these ones should be same in compo: and here
    mutationFn: async (payload: {
      productId: string;
      updatedData: Partial<TProduct>;
    }) => {
      const { productId, updatedData } = payload;

      return await updateProduct(productId, updatedData);
    },
    onSuccess: () => {
      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
      addToast({
        title: "Success",
        description: "Product updated successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to update product",
        color: "danger",
      });
    },
  });
};

//delete a product by id
export const useDeleteProduct = () => {
  return useMutation({
    mutationKey: ["DELETE-PRODUCT"],
    mutationFn: async (productId: string) => {
      return await deleteProduct(productId);
    },
    onSuccess: () => {
      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
      addToast({
        title: "Success",
        description: "Product deleted successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to delete product",
        color: "danger",
      });
    },
  });
};
//get all products hook
export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["GET-ALL-PRODUCTS"],
    queryFn: async () => {
      await getAllProducts();
    },
    onSuccess: () => {
      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
      addToast({
        title: "Success",
        description: "Products retrieved successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to retrieved products",
        color: "danger",
      });
    },
  });
};

// mutationFn: async (payload: {
//       userId: string;
//       updatedData: Partial<TUser>;
//     }) => {
//       const { userId, updatedData } = payload;
//       return await updateUser(userId, updatedData);
//     },
