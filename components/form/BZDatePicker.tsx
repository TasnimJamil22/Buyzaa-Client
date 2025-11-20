import { DatePicker } from "@heroui/date-picker";
import { Controller } from "react-hook-form";

import { IInput } from "@/types";

interface IProps extends IInput {}
export default function BZDatePicker({ label, name }: IProps) {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          className="max-w-full text-gray-100"
          label={label}
          variant="bordered"
          {...fields}
        />
      )}
    />
  );
}
