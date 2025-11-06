import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import BZSelect from "@/components/form/BZSelect";
import { useGetAllCategories } from "@/hooks/category.hook";
import { useUpdateProduct } from "@/hooks/product.hook";
import { TProduct, TCategory } from "@/types";
import { Button } from "@heroui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface IProps {
  product: TProduct;
}
//we are receiving { product }: IProps from ProductDetail where we called this compo
export default function UpdateProductForm({ product }: IProps) {
  const { mutate: handleUpdateProduct, isPending } = useUpdateProduct();
  const { data, isLoading, isSuccess } = useGetAllCategories();
  const categories: TCategory[] = data?.data || [];
  const onSubmit: SubmitHandler<FieldValues> = async (
    data: Partial<TProduct>
  ) => {
    handleUpdateProduct({
      productId: data?._id as string,
      updatedData: data,
    });
    console.log(data);
  };
  return (
    // <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
    //   <h2 className="text-2xl font-semibold mb-4 text-gray-700">
    //     Create New Product
    //   </h2>

    //   <BZForm onSubmit={onSubmit} defaultValues={product}>
    //     {/* Product Name */}
    //     <BZInput name="name" label="Name" />

    //     {/* Description */}
    //     <BZInput name="description" label="Description" />

    //     {/* Price */}
    //     <BZInput name="price" label="Price" type="number" />

    //     {/* Quantity */}
    //     <BZInput name="quantity" label="Quantity" type="number" />
    //     {/* category */}
    //     <BZSelect
    //       name="category"
    //       label={product?.category?.name}
    //       //   defaultValue={product?.category?.name}
    //       options={categories.map((cat) => ({
    //         key: cat._id!, // ! tells TS "_id is definitely string"
    //         label: cat.name,
    //       }))}
    //     />
    //     {/* Category */}
    //     {/* {!isLoading && (
    //       <select name="category">
    //         {categories?.map((cat: any) => (
    //           <option key={cat._id} value={cat._id}>
    //             {cat.name}
    //           </option>
    //         ))}
    //         Category
    //       </select>
    //     )} */}

    //     {/* Images (optional) */}
    //     <BZInput name="images" label="Image URLs" />

    //     <Button
    //       type="submit"
    //       color="primary"
    //       isLoading={isPending}
    //       className="w-full mt-4"
    //     >
    //       Create Product
    //     </Button>
    //   </BZForm>
    // </div>
    <div className="max-w-xl mx-auto   px-12 rounded-3xl">
      <h2 className="text-3xl font-extrabold mb-6 text-default-500 text-center">
        Update Product
      </h2>

      <BZForm onSubmit={onSubmit} defaultValues={product}>
        {/* Product Name */}
        <BZInput name="name" label="Product Name" />

        {/* Description */}
        <BZInput name="description" label="Description" />

        {/* Price */}
        <BZInput name="price" label="Price ($)" type="number" />

        {/* Quantity */}
        <BZInput name="quantity" label="Quantity" type="number" />

        {/* Category */}
        <BZSelect
          name="category"
          label="Category"
          defaultValue={product?.category?._id || ""}
          options={categories.map((cat) => ({
            key: cat._id!,
            label: cat.name,
          }))}
        />

        {/* Images (optional) */}
        <BZInput name="images" label="Image URLs" />

        {/* Submit Button */}
        <Button
          type="submit"
          className="
    px-6 py-3 rounded-lg 
    bg-gradient-to-r from-[#d4af37] to-[#b8860b] 
    text-white font-semibold shadow-md 
    hover:shadow-lg 
    hover:from-[#c6a134] hover:to-[#9b7605] 
    transition-all duration-300
  "
        >
          Update Product
        </Button>
      </BZForm>
    </div>
  );
}
