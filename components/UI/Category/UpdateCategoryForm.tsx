import { Button } from "@heroui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useUpdateCategory } from "@/hooks/category.hook";
import { TCategory } from "@/types";

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
    data: Partial<TCategory>,
  ) => {
    handleUpdateCategory({
      categoryId: category?._id as string,
      updatedCategory: data,
    });
  };

  return (
    <BZForm defaultValues={defaultValues} onSubmit={onSubmit}>
      <BZInput label="Name" name="name" />
      <BZInput label="Description" name="description" />
      <BZInput label="Img URL" name="image" />
      <Button className="my-3" type="submit">
        update Category
      </Button>
    </BZForm>
  );
}
