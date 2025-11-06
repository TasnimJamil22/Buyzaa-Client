import BZFrom from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useUpdateUser } from "@/hooks/user.hook";
import { TUser } from "@/types";
import { Divider } from "@heroui/divider";
import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface UpdateUserFormProps {
  user: TUser;
}
export default function UpdateUserForm({ user }: UpdateUserFormProps) {
  const { mutate: handleUpdateUser, isPending, isSuccess } = useUpdateUser();

  const onSubmit: SubmitHandler<FieldValues> = (data: Partial<TUser>) => {
    handleUpdateUser({
      userId: user._id as string,
      updatedData: data,
    });
  };
  return (
    <div className="max-w-lg mx-auto  shadow-md p-6 rounded-xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Update User Form</h2>

      <BZFrom onSubmit={onSubmit} defaultValues={user}>
        <BZInput name="name" label="Full Name" />
        <BZInput name="email" label="Email" />
        <BZInput name="password" label="Password" type="password" />
        <BZInput name="role" label="Role" />
        <BZInput name="status" label="Status" />
        <BZInput name="mobileNumber" label="Mobile Number" />
        <BZInput name="profilePhoto" label="Profile Photo (URL)" />

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-gradient-to-r from-[#c9a14a] to-[#a17c37] hover:from-[#a17c37]   text-white py-2 rounded-lg   transition disabled:opacity-50"
        >
          {isPending ? "Updating..." : "Update User"}
        </button>
      </BZFrom>
    </div>
  );
}
