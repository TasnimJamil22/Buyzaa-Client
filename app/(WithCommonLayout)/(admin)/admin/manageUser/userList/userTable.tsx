"use client";
import { DeleteIcon, EditIcon } from "@/components/icons";
import BZModal from "@/components/modals/BZModal";
import {
  useCreateUser,
  useDeleteUser,
  useGetAllUser,
  useUpdateUser,
} from "@/hooks/user.hook";
import { TUser, USER_ROLE, USER_STATUS } from "@/types";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Link,
} from "@heroui/react";

// interface IProps {
//   user: TUser;
// }

import BZInput from "@/components/form/BZInput";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
// import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import UpdateUserForm from "@/components/UI/User/UpdateUserForm";
import { useState } from "react";

interface IUserForm {
  name: string;
  email: string;
  password: string;
}
export default function UserTable() {
  //Update user: we have this state for update user.
  // const [selectedUser, setSelectedUser] = useState<TUser | null>(null);
  // const { _id, name, role, email, password, mobileNumber, profilePhoto } = user || {};
  const { data } = useGetAllUser();

  const users = data?.data ?? [];
  console.log(users);

  const { mutate: handleDeleteUser, isSuccess } = useDeleteUser();
  const { mutate: handleCreateUser, isPending: createUserLoading } =
    useCreateUser();

  //delete user
  const handleDelete = (id: string) => {
    handleDeleteUser(id);
  };

  //create user
  const methods = useForm<Partial<TUser>>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "USER",
      status: "ACTIVE",
      mobileNumber: "",
      profilePhoto: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Submitting user:", data);
    const userData = {
      ...data,
    };
    handleCreateUser(userData as TUser); // service wraps it in { user: ... }
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create New User
          </h2>
          {/* create user form */}
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <BZInput name="name" label="Full Name" />
              <BZInput name="email" label="Email" />
              <BZInput name="password" label="Password" type="password" />
              <BZInput name="role" label="Role" />
              <BZInput name="status" label="Status" />
              <BZInput name="mobileNumber" label="Mobile Number" />

              {/* Profile photo spans full width */}
              <div className="md:col-span-2">
                <BZInput name="profilePhoto" label="Profile Photo (URL)" />
              </div>

              {/* Submit Button spans full width on mobile, centered on desktop */}
              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={createUserLoading}
                  className={`w-full md:w-1/2 text-white font-semibold py-3 px-6 rounded-xl border shadow-md 
      ${
        createUserLoading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-blue-600 to-blue-500 border-blue-700 hover:from-blue-700 hover:to-blue-600 transition-all"
      }`}
                >
                  {createUserLoading ? "Creating..." : "Create User"}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>

      {/* user table */}
      <Table aria-label="Example static collection table mb-5">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>Mobile No</TableColumn>

          <TableColumn>Details</TableColumn>
        </TableHeader>
        <TableBody>
          {users?.map((user: any) => (
            <TableRow key={user._id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.mobileNumber}</TableCell>

              <TableCell>
                <Link href={`/admin/manageUser/userList/${user._id}`}>
                  view detalis
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
