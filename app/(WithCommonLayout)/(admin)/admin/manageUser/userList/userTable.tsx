"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from "@heroui/react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

import { useCreateUser, useDeleteUser, useGetAllUser } from "@/hooks/user.hook";
import { TUser } from "@/types";

// interface IProps {
//   user: TUser;
// }

import BZInput from "@/components/form/BZInput";

// import { useForm, SubmitHandler } from "react-hook-form";

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
      <div className="flex justify-center mt-10 mb-10">
        <div className="w-full max-w-3xl   p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-[#a17c37] text-3xl font-bold text-center   mb-6">
            Create New User
          </h2>
          {/* create user form */}
          <FormProvider {...methods}>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <BZInput label="Full Name" name="name" />
              <BZInput label="Email" name="email" />
              <BZInput label="Password" name="password" type="password" />
              <BZInput label="Role" name="role" />
              <BZInput label="Status" name="status" />
              <BZInput label="Mobile Number" name="mobileNumber" />

              {/* Profile photo spans full width */}
              <div className="md:col-span-2">
                <BZInput label="Profile Photo (URL)" name="profilePhoto" />
              </div>

              {/* Submit Button spans full width on mobile, centered on desktop */}
              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  className={`w-full md:w-1/2  bg-gradient-to-r from-[#c9a14a] to-[#a17c37] hover:from-[#a17c37] hover:to-[#8b6d2f] text-white font-semibold py-3 px-6 rounded-xl border shadow-md 
      ${
        createUserLoading
          ? "bg-gray-400 cursor-not-allowed"
          : " bg-gradient-to-r from-[#c9a14a] to-[#a17c37] hover:from-[#a17c37] hover:to-[#8b6d2f] text-white  transition-all"
      }`}
                  disabled={createUserLoading}
                  type="submit"
                >
                  {createUserLoading ? "Creating..." : "Create User"}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>

      {/* user table */}
      <h1 className="text-[#a17c37] text-2xl font-semibold   mb-6 border-b pb-2">
        Users List
      </h1>

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
