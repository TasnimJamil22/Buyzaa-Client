import { Button } from "@heroui/button";
import { SubmitHandler } from "react-hook-form";

import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useCreateCategory } from "@/hooks/category.hook";
import { TCategory } from "@/types";

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
      <BZInput label="Name" name="name" />
      <BZInput label="Description" name="description" />
      <BZInput label="Img URL" name="image" />
      <Button className="my-3" type="submit">
        Create Category
      </Button>
    </BZForm>
  );
}
