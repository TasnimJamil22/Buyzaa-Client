import { FieldValues, SubmitHandler } from "react-hook-form";

import BZFrom from "@/components/form/BZForm";
import BZInput from "@/components/form/BZInput";
import { useUpdateUser } from "@/hooks/user.hook";
import { TUser } from "@/types";

interface UpdateUserFormProps {
  user: TUser;
}
export default function ProfileUpdate({ user }: UpdateUserFormProps) {
  const { mutate: handleUpdateUser, isPending, isSuccess } = useUpdateUser();

  const onSubmit: SubmitHandler<FieldValues> = (data: Partial<TUser>) => {
    // Remove password if empty
    if (!data.password) {
      delete data.password;
    }

    // Remove profilePhoto if empty
    if (!data.profilePhoto) {
      delete data.profilePhoto;
    }
    handleUpdateUser({
      userId: user._id as string,
      updatedData: data,
    });
    // console.log(data);
  };

  return (
    <div className="max-w-lg mx-auto  shadow-md p-6 rounded-xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Update User Form</h2>

      <BZFrom defaultValues={user} onSubmit={onSubmit}>
        <BZInput label="Full Name" name="name" />

        <BZInput label="Password" name="password" type="password" />

        <BZInput label="Mobile Number" name="mobileNumber" />

        <button
          className="w-full bg-gradient-to-r from-[#c9a14a] to-[#a17c37] hover:from-[#a17c37]   text-white py-2 rounded-lg   transition disabled:opacity-50"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Updating..." : "Update User"}
        </button>
      </BZFrom>
    </div>
  );
}
