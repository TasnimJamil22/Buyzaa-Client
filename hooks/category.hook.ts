//get all categories hook (for using in react components)
//no async

import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "@/services/Category";
import { TCategory } from "@/types";
import { addToast } from "@heroui/toast";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//get all categories
export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["GET-ALL-CATEGORIES"],
    queryFn: async () => await getAllCategories(),
  });
};

//create category
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (category: TCategory) => {
      return await createCategory(category);
    },
    onSuccess: () => {
      // ✅ Refetch the list of users
      queryClient.invalidateQueries({ queryKey: ["GET-ALL-CATEGORIES"] });
      addToast({
        title: "Success",
        description: "Category created successfully",
        color: "success",
      });

      // ✅ Refetch the list of users
      // queryClient.invalidateQueries({ queryKey: ["GET-ALL-USER"] });
    },
    onError: (error: any) => {
      addToast({
        title: "Error",
        description: error?.message || "Failed to create category",
        color: "danger",
      });
    },
  });
};
//delete category by id
export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: async (categoryId: string) => {
      return await deleteCategory(categoryId);
    },
  });
};
//update category by id
export const useUpdateCategory = () => {
  return useMutation({
    mutationFn: async (payload: {
      categoryId: string;
      updatedCategory: Partial<TCategory>;
    }) => {
      const { categoryId, updatedCategory } = payload;
      const data = await updateCategory(categoryId, updatedCategory);
      return data;
    },
  });
};
