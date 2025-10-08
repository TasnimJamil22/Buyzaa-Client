"use client";
import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useRegisterUser } from "@/hooks/auth.hook";
import { TUser } from "@/types";
import { Button } from "@heroui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function RegisterPage() {
  const { mutate: handleRegisterUser } = useRegisterUser();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
    };
    handleRegisterUser(userData);
    console.log(userData);
  };
  return (
    <div className=" w-full max-w-md mx-auto my-32 ">
      <div className="w-full max-w-md  py-12 px-8 rounded-2xl shadow-md">
        <h1 className="text-3xl text-default-700 font-semibold mb-6 font-[Manrope] mx-auto">
          Please Register
        </h1>
        <BZForm onSubmit={onSubmit}>
          <div className="flex flex-col gap-4">
            <BZInput name="name" label="Name" />
            <BZInput name="email" label="Email" type="email" />
            <BZInput name="password" label="Password" type="password" />
            <BZInput name="mobileNumber" label="Mobile Number" />
          </div>
          <div className="mt-4">
            <Button type="submit" className="w-full">
              Register
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
