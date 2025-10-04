import Container from "@/components/UI/Container";
import ProductCard from "@/components/UI/Products";
import ProductDetail from "@/components/UI/Products/ProductDetail";
import ProductReview from "@/components/UI/Products/ProductReview";
import { getAProdudctById } from "@/services/Product";

interface IProps {
  params: {
    productId: string;
  };
}
const ProductDetailPage = async ({ params: { productId } }: IProps) => {
  const { data: product } = await getAProdudctById(productId);
  console.log(product);
  return (
    <Container>
      <div className="mx-auto bg-default-100 rounded-lg">
        <h1>{product.name}</h1>
        <ProductDetail key={product?._id} product={product} />
      </div>
      <div className="my-12">
        <ProductReview />
      </div>
    </Container>
  );
};
export default ProductDetailPage;
