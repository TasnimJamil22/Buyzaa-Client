import { IInput } from "@/types";
import { Select, SelectItem } from "@heroui/react";
import { Controller, useFormContext } from "react-hook-form";

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
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field }) => (
        <Select
          {...field} // ✅ value & onChange handled by Controller
          label={label}
          variant={variant}
          isDisabled={disabled}
        >
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>
      )}
    />
  );
};

export default BZSelect;
