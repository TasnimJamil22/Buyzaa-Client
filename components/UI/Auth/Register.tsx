"use client";
import { Button } from "@heroui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";

import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useUser } from "@/context/user.provider";
import { useRegisterUser } from "@/hooks/auth.hook";
import registerValidationSchema from "@/schemas/register.schema";
import { TUser } from "@/types";

export default function Register() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect"); //this redirect is a pathname actually,(ex:/profile),coming from our url, which we have set in middleware.

  const {
    mutate: handleRegisterUser,
    isPending,
    isSuccess,
  } = useRegisterUser();
  const { setIsLoading } = useUser();

  const onSubmit: SubmitHandler<TUser> = (data) => {
    const userData = {
      ...data,
    };

    handleRegisterUser(userData);
    console.log(userData);
    setIsLoading(true);
  };

  //This is for: if we go direct login, that means no redirect from url like /profile, /create-post, /settings etc so it will take us to home page after login . But when we wanted to go in /profile etc but we needed to login then it after login it will take us to that .... /profile page
  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <div className=" w-full max-w-md mx-auto my-32 ">
      <div className="w-full max-w-md  py-12 px-8 rounded-2xl shadow-md items-center">
        <h1 className="text-4xl font-semibold mb-6 text-accent font-[Manrope]">
          Please Register
        </h1>
        <BZForm
          resolver={zodResolver(registerValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-4">
            <BZInput label="Name" name="name" />
            <BZInput label="Email" name="email" type="email" />
            <BZInput label="Password" name="password" type="password" />
            <BZInput label="Mobile Number" name="mobileNumber" />
          </div>
          <div className="mt-4">
            <Button className="w-full bg-accent" type="submit">
              Register
            </Button>
            <p className="text-default-500 py-3">
              Alreadly have an account?
              <Link className="text-amber-800" href="/login">
                Log in
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
