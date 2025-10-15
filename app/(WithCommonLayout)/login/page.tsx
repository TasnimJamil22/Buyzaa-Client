"use client";
import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useUser } from "@/context/user.provider";
import { useLoginUser, useRegisterUser } from "@/hooks/auth.hook";
import { TUser } from "@/types";
import { Button } from "@heroui/button";
import { Jim_Nightshade } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function LoginPage() {
  const { mutate: handleLoginUser, isPending, isSuccess } = useLoginUser();
  const { setIsLoading } = useUser();
  const router = useRouter();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
    };
    handleLoginUser(userData);
    setIsLoading(true);
    console.log(userData);
  };
  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push("/");
    }
  }, [isPending, isSuccess]);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  ">
      <h1 className="text-4xl font-semibold mb-6 text-accent font-[Manrope] ">
        Please Login
      </h1>

      <div className="w-full max-w-md  p-8 rounded-2xl shadow-md">
        <BZForm onSubmit={onSubmit}>
          <div className="flex flex-col gap-4">
            <BZInput name="email" label="Email" type="email" />
            <BZInput name="password" label="Password" type="password" />
            <Button type="submit" className="w-full bg-accent">
              Login
            </Button>
            <p className="text-default-500 py-3">
              New to Buyzaa?
              <Link className="text-amber-600" href="/register">
                Register
              </Link>
            </p>
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
