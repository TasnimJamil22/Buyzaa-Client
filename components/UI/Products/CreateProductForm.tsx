"use client";
import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import BZSelect from "@/components/form/BZSelect";
import { useGetAllCategories } from "@/hooks/category.hook";
import { useCreateProduct } from "@/hooks/product.hook";
import { TCategory, TProduct } from "@/types";
import { Button } from "@heroui/button";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

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
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Create New Product
      </h2>

      <BZForm onSubmit={onSubmit}>
        {/* Product Name */}
        <BZInput name="name" label="Name" />

        {/* Description */}
        <BZInput name="description" label="Description" />

        {/* Price */}
        <BZInput name="price" label="Price" type="number" />

        {/* Quantity */}
        <BZInput name="quantity" label="Quantity" type="number" />
        {/* category */}
        <BZSelect
          name="category"
          label="Category"
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
        <BZInput name="images" label="Image URLs" />

        <Button
          type="submit"
          color="primary"
          isLoading={isPending}
          className="w-full mt-4"
        >
          Create Product
        </Button>
      </BZForm>
    </div>
  );
}
