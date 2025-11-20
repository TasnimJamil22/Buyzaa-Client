import { Select, SelectItem } from "@heroui/react";
import { Controller, useFormContext } from "react-hook-form";

import { IInput } from "@/types";

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
      control={control}
      defaultValue={defaultValue || ""}
      name={name}
      render={({ field }) => (
        <Select
          {...field} // ✅ value & onChange handled by Controller
          isDisabled={disabled}
          label={label}
          variant={variant}
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
