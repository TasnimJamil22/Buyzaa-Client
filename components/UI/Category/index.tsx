"use client";

import BZModal from "@/components/modals/BZModal";
import { useCreateCategory, useGetAllCategories } from "@/hooks/category.hook";
import { TCategory } from "@/types";
import CreaateCategoryForm from "./CreateCategoryForm";
import UpdateCategoryForm from "./UpdateCategoryForm";
import Link from "next/link";

interface IProps {
  categories: TCategory[];
}

export default function CategoryList({ categories }: IProps) {
  console.log("Categories", categories);

  //   const { data, isLoading, error } = useGetAllCategories();

  //   if (isLoading)
  //     return <p className="text-center mt-10">Loading categories...</p>;
  //   if (error)
  //     return (
  //       <p className="text-red-500 text-center">Failed to load categories</p>
  //     );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Category List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  p-5">
        {categories?.map((category: any) => (
          <div
            key={category._id}
            className="  rounded-2xl shadow-sm hover:shadow-md transition p-5 bg-blue-100"
          >
            {/* Category Image (optional) */}
            {category.image && (
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
            )}

            <h2 className="text-lg font-semibold text-gray-800">
              <Link href={`/admin/categories/${category?._id}`}>
                {category.name}
              </Link>
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {category.description || "No description provided."}
            </p>

            {/* <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm mx-auto">
              view details
            </button> */}
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <BZModal
          buttonText="Create New Category"
          body={<CreaateCategoryForm />}
        />
      </div>
    </div>
  );
}
