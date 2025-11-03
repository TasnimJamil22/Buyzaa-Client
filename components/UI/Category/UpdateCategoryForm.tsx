import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useCreateCategory, useUpdateCategory } from "@/hooks/category.hook";
import { TCategory } from "@/types";
import { Button } from "@heroui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface IProps {
  category: TCategory;
}
export default function UpdateCategoryForm({ category }: IProps) {
  const { mutate: handleUpdateCategory } = useUpdateCategory();
  const defaultValues = {
    name: category?.name,
    description: category?.description,
    images: category?.images,
  };

  const onSubmit: SubmitHandler<FieldValues> = async (
    data: Partial<TCategory>
  ) => {
    handleUpdateCategory({
      categoryId: category?._id as string,
      updatedCategory: data,
    });
  };
  return (
    <BZForm onSubmit={onSubmit} defaultValues={defaultValues}>
      <BZInput name="name" label="Name" />
      <BZInput name="description" label="Description" />
      <BZInput name="image" label="Img URL" />
      <Button type="submit" className="my-3">
        update Category
      </Button>
    </BZForm>
  );
}
