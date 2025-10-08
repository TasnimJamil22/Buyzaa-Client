import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

//category
export interface TCategory {
  _id?: string;
  name: string;
  description: string;
  images?: string[];
  isDeleted?: boolean;
}
export interface TProduct {
  _id?: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  // category: string;
  category: TCategory;
  images?: string[];
}

//user interface/type
export const USER_ROLE = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export const USER_STATUS = {
  ACTIVE: "ACTIVE",
  BLOCKED: "BLOCKED",
} as const;

export type TUser = {
  _id?: string;
  name: string;
  role: keyof typeof USER_ROLE;
  email: string;
  password: string;
  status: keyof typeof USER_STATUS;
  passwordChangedAt?: Date;
  mobileNumber?: string;
  profilePhoto?: string;
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

//BZInput IInput react-hook-form
export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}
