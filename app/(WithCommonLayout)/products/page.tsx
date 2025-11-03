import ProductCard from "@/components/UI/Products";
import CreateProductForm from "@/components/UI/Products/CreateProductForm";
import ProductFilter from "@/components/UI/Products/ProductFilter";
import { getAllCategories } from "@/services/Category";
import { getAllProducts } from "@/services/Product";

export default async function Products() {
  const { data: products } = await getAllProducts();
  const { data: categories } = await getAllCategories();
  console.log("the:", products);
  console.log("the:", categories);
  return (
    <div>
      <h1>This is Products Page</h1>
      <div>
        <ProductFilter categories={categories} />
      </div>
      {/* {products.map((product: any) => (
        <ProductCard key={product._id} product={product} />
      ))} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
        {/* {data?.data?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
        {/* {products?.map((product: any) => (
          <ProductCard key={product._id} product={product}  />
        ))} */}
      </div>

      {/* <div>
        <BZModal
          buttonText="Create a new product"
          body={<CreateProductForm products={products} />}
        />
      </div> */}
    </div>
  );
}
