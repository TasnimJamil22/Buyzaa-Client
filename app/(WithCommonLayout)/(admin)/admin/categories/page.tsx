import CategoryList from "@/components/UI/Category";
import { useGetAllCategories } from "@/hooks/category.hook";
import { getAllCategories } from "@/services/Category";
import { TCategory } from "@/types";

export default async function Categories() {
  const { data: categories } = await getAllCategories();

  return (
    <div>
      <h1>Categories</h1>
      <CategoryList categories={categories}/>
    </div>
  );
}
