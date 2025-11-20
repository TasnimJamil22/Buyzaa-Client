"use client";

import Link from "next/link";

import CreaateCategoryForm from "./CreateCategoryForm";

import BZModal from "@/components/modals/BZModal";
import { useGetAllCategories } from "@/hooks/category.hook";
import { TCategory } from "@/types";

interface IProps {
  categories: TCategory[];
}

export default function CategoryList() {
  // export default function CategoryList({ categories }: IProps) {
  // console.log("Categories", categories);

  const { data, isLoading, error } = useGetAllCategories();
  const categories: TCategory[] = data?.data || [];

  //   if (isLoading)
  //     return <p className="text-center mt-10">Loading categories...</p>;
  //   if (error)
  //     return (
  //       <p className="text-red-500 text-center">Failed to load categories</p>
  //     );

  return (
    <div className="p-6">
      <h1 className="font-dancing text-6xl font-bold mb-6 text-[#a17c37]">
        Category List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  p-5">
        {categories?.map((category: any) => (
          <div
            key={category._id}
            className="rounded-2xl shadow-sm hover:shadow-md transition p-5  text-[#a17c37]"
          >
            {/* Category Image (optional) */}
            {category.image && (
              <img
                alt={category.name}
                className="w-full h-40 object-cover rounded-xl mb-3"
                src={category.image}
              />
            )}

            <h2 className="text-lg font-semibold text-gray-800">
              <Link
                className="relative px-4 py-2 text-lg font-medium text-[#a17c37] hover:text-[#8b6d2f] transition-all duration-300 
                   after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-[#e0c066] to-[#a17c37]
                   hover:after:w-full after:transition-all after:duration-300"
                href={`/admin/categories/${category?._id}`}
              >
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
          body={<CreaateCategoryForm />}
          buttonText="Create New Category"
        />
      </div>
    </div>
  );
}
