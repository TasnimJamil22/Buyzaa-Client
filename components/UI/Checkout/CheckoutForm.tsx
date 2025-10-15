"use client";
import BZDatePicker from "@/components/form/BZDatePicker";
import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import BZSelect from "@/components/form/BZSelect";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { Button } from "@heroui/button";
import Link from "next/link";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export default function CheckoutForm() {
  //address - city selection
  const cityOptions = allDistict()
    .sort()
    .map((city: string) => {
      return {
        key: city,
        label: city,
      };
    });
  const methods = useForm();
  const { control, handleSubmit } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = {
      ...data,
      deliveryDate: dateToISO(data.deliveryDate),
    };
  };
  const today = new Date();
  console.log(today);
  return (
    <div className="w-full flex flex-col items-center ">
      <h1 className="w-full flex justify-center items-center text-4xl font-semibold mb-6 text-accent font-[Manrope]">
        Checkout
      </h1>

      <div className="w-full flex justify-center items-center   mt-2 rounded-2xl shadow-md">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-3xl p-6"
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <BZInput name="name" label="Name" />
              <BZInput name="email" label="Email" type="email" />
              <BZInput name="mobileNo" label="Mobile Number" />
              <BZInput name="address" label="Address" />
              <BZSelect name="city" label="City" options={cityOptions} />
              <BZDatePicker name="deliveryDate" label="Delivery Date" />
            </div>

            <Button type="submit" className="w-full bg-accent my-4">
              Proceed
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
