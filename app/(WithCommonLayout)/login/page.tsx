"use client";
import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useRegisterUser } from "@/hooks/auth.hook";
import { TUser } from "@/types";
import { Button } from "@heroui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function LoginPage() {
  const { mutate: handleRegisterUser } = useRegisterUser();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
    };
    handleRegisterUser(userData);
    console.log(userData);
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  ">
      <h1 className="text-2xl font-semibold mb-6">Please Login</h1>

      <div className="w-full max-w-md  p-8 rounded-2xl shadow-md">
        <BZForm onSubmit={onSubmit}>
          <div className="flex flex-col gap-4">
            <BZInput name="email" label="Email" type="email" />
            <BZInput name="password" label="Password" type="password" />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </BZForm>
      </div>
    </div>

    // <div>
    //   <h1>Please Login</h1>
    //   <div className="w-1/2  flex justify-center items-center">
    //     <BZForm onSubmit={onSubmit}>
    //       <BZInput name="name" label="Name" />
    //       <BZInput name="email" label="Email" />
    //       <BZInput name="password" label="Password" />
    //       <BZInput name="mobileNumber" label="Mobile Number" />
    //       <Button type="submit">Register</Button>
    //     </BZForm>
    //   </div>
    // </div>
  );
}
