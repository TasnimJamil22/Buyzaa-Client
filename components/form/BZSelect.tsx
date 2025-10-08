import { IInput } from "@/types";
import { Select, SelectItem } from "@heroui/react";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {
  options: {
    key: string;

    label: string;
  }[];
  defaultValue?: string; // optional default value
}

const BZSelect = ({
  options,
  name,
  label,
  variant = "bordered",
  disabled,
  defaultValue,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      {...register(name, { value: defaultValue })} // ✅ set default value here
      label={label}
      variant={variant}
      isDisabled={disabled}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default BZSelect;
