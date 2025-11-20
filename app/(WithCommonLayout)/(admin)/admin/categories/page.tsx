import CategoryList from "@/components/UI/Category";

export default async function Categories() {
  // const { data: categories } = await getAllCategories();

  return (
    <div>
      {/* <h1>Categories</h1> */}
      <CategoryList />
      {/* <CategoryList categories={categories} /> */}
    </div>
  );
}
