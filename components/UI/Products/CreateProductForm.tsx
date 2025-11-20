"use client";
import { Button } from "@heroui/button";
import { SubmitHandler } from "react-hook-form";

import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import BZSelect from "@/components/form/BZSelect";
import { useGetAllCategories } from "@/hooks/category.hook";
import { useCreateProduct } from "@/hooks/product.hook";
import { TCategory, TProduct } from "@/types";

interface IProps {
  products: TProduct;
}
export default function CreateProductForm({ products }: IProps) {
  const { mutate: handleCreateProduct, isPending } = useCreateProduct();
  const { data, isLoading, isSuccess } = useGetAllCategories();
  const categories: TCategory[] = data?.data || [];

  console.log(categories);
  //2
  // const { register, handleSubmit, reset } = useForm(); // ✅ this line gives you register

  const onSubmit: SubmitHandler<TProduct> = async (data: TProduct) => {
    const payload = {
      products: {
        ...data,
        // images: [data.images], // wrap image in array if needed
      },
    };

    handleCreateProduct(payload);
    console.log(payload);
  };

  return (
    <div className="max-w-xl mx-auto  p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Create New Product
      </h2>

      <BZForm onSubmit={onSubmit}>
        {/* Product Name */}
        <BZInput label="Name" name="name" />

        {/* Description */}
        <BZInput label="Description" name="description" />

        {/* Price */}
        <BZInput label="Price" name="price" type="number" />

        {/* Quantity */}
        <BZInput label="Quantity" name="quantity" type="number" />
        {/* category */}
        <BZSelect
          label="Category"
          name="category"
          options={categories.map((cat) => ({
            key: cat._id!, // ! tells TS "_id is definitely string"
            label: cat.name,
          }))}
        />
        {/* Category */}
        {/* {!isLoading && (
          <select name="category">
            {categories?.map((cat: any) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
            Category
          </select>
        )} */}

        {/* Images (optional) */}
        <BZInput label="Image URLs" name="images" />

        <Button
          className="w-full mt-4 bg-yellow-400"
          isLoading={isPending}
          type="submit"
        >
          Create Product
        </Button>
      </BZForm>
    </div>
  );
}
