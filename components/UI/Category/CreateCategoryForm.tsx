import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useCreateCategory } from "@/hooks/category.hook";
import { TCategory } from "@/types";
import { Button } from "@heroui/button";
import { SubmitHandler } from "react-hook-form";

export default function CreaateCategoryForm() {
  const { mutate: handleCreateCategory } = useCreateCategory();
  const onSubmit: SubmitHandler<TCategory> = async (data) => {
    const category = {
      ...data,
    };
    handleCreateCategory(category);
    console.log(category);
  };
  return (
    <BZForm onSubmit={onSubmit}>
      <BZInput name="name" label="Name" />
      <BZInput name="description" label="Description" />
      <BZInput name="image" label="Img URL" />
      <Button type="submit" className="my-3">
        Create Category
      </Button>
    </BZForm>
  );
}
