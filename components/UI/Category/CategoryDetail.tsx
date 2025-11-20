// categoryDetailes page : [categoryId]-> page.tsx
// import CategoryDetail from "@/components/UI/Category/CategoryDetail";
// import { getASingleCategory } from "@/services/Category";

// interface IProps {
//   params: {
//     categoryId: string;
//   };
// }
// export default async function CategoryDetailsPage({
//   params: { categoryId },
// }: IProps) {
//   // const { categoryId } = params;
//   const { data: category } = await getASingleCategory(categoryId);

//   console.log(category);

//   return (
//     <div>
//       {/* <h1>Category:{categoryId}</h1> */}
//       <div>
//         <CategoryDetail key={category?._id} category={category} />
//       </div>
//       {/* <div>category:{category._id}</div> */}
//     </div>
//   );
// }

"use client";

import UpdateCategoryForm from "./UpdateCategoryForm";

import BZModal from "@/components/modals/BZModal";
import { TCategory } from "@/types";
// import { useGetCategoryById } from "@/hooks/category.hook";

import { useDeleteCategory } from "@/hooks/category.hook";

interface IProps {
  category: TCategory;
}
export default function CategoryDetail({ category }: IProps) {
  const { mutate: handleDeleteCategory } = useDeleteCategory();
  //   const params = useParams();
  //   const categoryId = params.id;

  //   const { data: category, isLoading, error } = useGetCategoryById(categoryId);

  //   if (isLoading)
  //     return (
  //       <p className="text-center mt-10 text-gray-500">Loading category...</p>
  //     );
  //   if (error)
  //     return (
  //       <p className="text-center mt-10 text-red-500">Failed to load category</p>
  //     );

  //   if (!category)
  //     return (
  //       <p className="text-center mt-10 text-gray-500">Category not found</p>
  //     );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6  rounded-3xl shadow-lg">
      {/* Category Image */}
      {/* {category.images && (
        <img
          src={category?.images }
          alt={category.name}
          className="w-full h-64 object-cover rounded-2xl mb-6"
        />
      )} */}

      {/* Category Info */}
      <h1 className="text-3xl font-bold text-[#a17c37] mb-3">
        {category.name}
      </h1>
      <p className="text-gray-600 mb-6">
        {category.description || "No description provided."}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <BZModal
          body={<UpdateCategoryForm category={category} />}
          buttonText="Update Category"
        />

        <BZModal
          body={`Are you sure you want to delete ${category?.name}?`}
          buttonText="Delete Category"
          title="Delete Confirmation"
          onAction={() => handleDeleteCategory(category?._id as string)}
        />
      </div>
    </div>
  );
}
