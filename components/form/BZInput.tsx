"use client";

import { IInput } from "@/types";
// import { Input } from "@heroui/react";
import { Input } from "@heroui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {}

// interface IProps {
//   variant?: "flat" | "bordered" | "faded" | "underlined";
//   size?: "sm" | "md" | "lg";
//   required?: boolean;
//   type?: string;
//   label: string;
//   name: string;

// }
export default function BZInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
  disabled = false,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext(); //this is we are getting as we send ...methods in <FormProvider/>

  // console.log("errors", errors);

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
      disabled={disabled}
      className="focus:outline-none focus:ring-0 border-none"
    />
  );
}
