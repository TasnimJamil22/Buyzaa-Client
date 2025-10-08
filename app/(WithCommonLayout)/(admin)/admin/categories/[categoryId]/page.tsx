import CategoryDetail from "@/components/UI/Category/CategoryDetail";
import { getAllCategories, getASingleCategory } from "@/services/Category";

interface IProps {
  params: {
    categoryId: string;
  };
}
export default async function CategoryDetailsPage({
  params: { categoryId },
}: IProps) {
  const { data: category } = await getASingleCategory(categoryId);
  console.log(category);
  return (
    <div>
      {/* <h1>Category:{categoryId}</h1> */}
      <div>
        <CategoryDetail category={category} />
      </div>
      {/* <div>category:{category._id}</div> */}
    </div>
  );
}
