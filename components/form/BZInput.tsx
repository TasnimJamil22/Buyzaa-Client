"use client";

import { IInput } from "@/types";
import { Input } from "@heroui/react";
// import { Input } from "@heroui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {}

interface IProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: "text" | "email" | "url" | "password";
  label: string;
  name: string;
}
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
    formState: { errors }, //gives errors of form
  } = useFormContext(); //this is we are getting as we send ...methods in <FormProvider/>

  console.log("errors", errors);

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]} // it’s a shorthand for: isInvalid={errors[name] ? true : false} ----> errors["email"],errors["password"] etc
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
      disabled={disabled}
      className={`
        w-full
        mb-4
        rounded-xl
        border border-[#e3d5a1]

        shadow-sm
        focus:ring-2 focus:ring-[#d4af37]
        focus:border-[#c6a134]
        transition-all duration-300
        placeholder-gray-400
         font-bold
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
      `}
    />
  );
}
