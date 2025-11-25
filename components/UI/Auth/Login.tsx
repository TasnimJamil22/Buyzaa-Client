"use client";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useUser } from "@/context/user.provider";
import { useLoginUser } from "@/hooks/auth.hook";
import loginValidationSchema from "@/schemas/login.schema";

export default function Login() {
  // const [errorMessage, setErrorMessage] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect"); //this redirect is a pathname actually,(ex:/profile),coming from our url, which we have set in middleware.

  const {
    mutate: handleLoginUser,
    isPending,
    isSuccess,
    error,
    isError,
  } = useLoginUser();
  const { setIsLoading } = useUser();
  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   try {
  //     setIsLoading(true);
  //     const res = await handleLoginUser(data);
  //     console.log("✅ Login successful:", res);
  //     setIsLoading(true);
  //     setError("");
  //   } catch (err: any) {
  //     setError(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  //
  //
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const userData = {
      ...data,
    };

    handleLoginUser(userData);

    setIsLoading(true);
    console.log(userData);
  };

  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   try {
  //     setIsLoading(true);
  //     const userData = {
  //       ...data,
  //     };
  //     loginUser(userData); // ✅ async call
  //     // console.log("✅ Login successful:", res);
  //     setIsLoading(true);
  //     setError(""); // clear old error
  //   } catch (err: any) {
  //     setError(err.message); // ✅ show backend message
  //   }
  // };

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
    <div className="flex flex-col justify-center items-center min-h-screen  ">
      <h1 className="text-4xl font-semibold mb-6 text-accent font-[Manrope] ">
        Please Login
      </h1>

      <div className="w-full max-w-md  p-8 rounded-2xl shadow-md">
        <BZForm
          resolver={zodResolver(loginValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-4">
            <BZInput required label="Email" name="email" type="email" />
            <BZInput
              required
              label="Password"
              name="password"
              type="password"
            />
            {/* error from backend like pass not matched,user not found etc */}
            {/* {error && <p className="text-red-500 text-sm">{errorMessage}</p>} */}
            {isError && (
              <p className="text-red-500 text-sm">
                {(error as Error)?.message}
              </p>
            )}
            <Button className="w-full bg-accent" type="submit">
              {isPending ? "Logging in..." : "Login"}
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
