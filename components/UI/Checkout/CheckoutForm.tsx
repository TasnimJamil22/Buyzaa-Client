"use client";
import BZDatePicker from "@/components/form/BZDatePicker";
import BZForm from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import BZSelect from "@/components/form/BZSelect";
import { useCart } from "@/context/cart.provider";
import { useUser } from "@/context/user.provider";
import { useCreateOrder } from "@/hooks/checkout.hook";
import { TItem, TOrder } from "@/types";
import { dateToISO, IDate } from "@/utils/dateToISO";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export default function CheckoutForm() {
  const { mutate: handleCreateOrder } = useCreateOrder();
  const { user } = useUser();
  const { cartItems } = useCart();
  const router = useRouter();
  //address - city selection
  const cityOptions = allDistict()
    .sort()
    .map((city: string) => {
      return {
        key: city,
        label: city,
      };
    });

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const methods = useForm({
    defaultValues: {
      email: user?.email || "",
    },
  });
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData: TOrder = {
      name: data.name || "",
      email: user?.email || "",
      mobileNo: data.mobileNo || "",
      address: data.address || "",
      city: data.city || "",
      deliveryDate: dateToISO(data.deliveryDate as IDate), // convert IDate → ISO string
      cartItems,
      totalAmount,
    };
    console.log(formData);
    handleCreateOrder(formData);
    router.push("/profile/orders");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="w-full flex justify-center items-center text-4xl font-semibold mb-6 text-accent font-[Manrope]">
        Checkout
      </h1>

      <div className="w-full flex justify-center items-center mt-2 rounded-2xl shadow-md">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-3xl p-6"
          >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <BZInput name="name" label="Name" />
              <BZInput
                name="email"
                label="Email"
                type="email"
                disabled={true}
                variant="faded"
              />
              <BZInput name="mobileNo" label="Mobile Number" />
              <BZInput name="address" label="Address" />
              <BZSelect name="city" label="City" options={cityOptions} />
              <BZDatePicker name="deliveryDate" label="Delivery Date" />
            </div>

            <Button type="submit" className="w-full bg-accent my-4">
              {/* <Link href="/profile/orders"> */}
              Proceed ${totalAmount.toFixed(2)}
              {/* </Link> */}
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
