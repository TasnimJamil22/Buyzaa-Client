import { IInput } from "@/types";
import { DatePicker } from "@heroui/date-picker";
import { Controller } from "react-hook-form";

interface IProps extends IInput {}
export default function BZDatePicker({ label, name }: IProps) {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          className="max-w-full text-gray-100"
          variant="bordered"
          label={label}
          {...fields}
        />
      )}
    />
  );
}
