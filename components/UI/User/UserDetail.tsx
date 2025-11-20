"use client";

import { Card, CardBody } from "@heroui/react";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Shield,
  Clock,
  KeyRound,
  UserX,
  CalendarDays,
} from "lucide-react";
import { useRouter } from "next/navigation";

import UpdateUserForm from "./UpdateUserForm";

import BZModal from "@/components/modals/BZModal";
import { useDeleteUser } from "@/hooks/user.hook";
import { TUser } from "@/types";

interface IProps {
  user: TUser;
}

export default function UserDetail({ user }: IProps) {
  const router = useRouter();
  const { mutate: handleDeleteUser, isSuccess: isDeleted } = useDeleteUser();

  //delete user
  const handleDelete = (id: string) => {
    handleDeleteUser(id);
    // handleDeleteUser(id, {
    //   onSuccess: () => {
    //     // After deletion, navigate back to the user list
    //     router.push("/admin/manageUser/userList");
    //   },
    // });
  };

  if (isDeleted) {
    return (
      <div className="max-w-2xl mx-auto p-10 text-center text-green-600">
        <p className="text-xl font-semibold">User deleted successfully ✅</p>
        <button
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          onClick={() => router.push("/admin/manageUser/userList")}
        >
          Back to Users List
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-10">
      <Card className="overflow-hidden rounded-2xl shadow-xl border border-gray-200">
        {/* Profile Header */}
        <div className="bg-gradient-to-r  bg-gradient-to-r from-[#c9a14a] to-[#a17c37] hover:from-[#a17c37] hover:to-[#8b6d2f] text-white p-10 flex flex-col items-center">
          <Avatar
            className="w-28 h-28 border-4 border-white shadow-md"
            size="lg"
            src={
              user.profilePhoto ||
              "https://ui-avatars.com/api/?name=" + user.name
            }
          />
          <h2 className="mt-4 text-2xl font-bold text-white">{user.name}</h2>
          <p className="text-sm text-indigo-100">User ID: {user._id}</p>
        </div>

        {/* User Info Section */}
        <CardBody className="p-10">
          <h3 className="text-lg font-semibold text-[#a17c37] mb-6">
            User Information
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            {/* Email */}
            <div className="flex items-center gap-3 border-b pb-4">
              <Mail className="w-5 h-5 text-indigo-500" />
              <span className="text-default-500">{user.email}</span>
            </div>

            {/* Phone */}
            {user.mobileNumber && (
              <div className="flex items-center gap-3 border-b pb-4">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-default-500">{user.mobileNumber}</span>
              </div>
            )}

            {/* Role */}
            {user.role && (
              <div className="flex items-center gap-3 border-b pb-4">
                <Shield className="w-5 h-5 text-orange-500" />
                <span className="text-default-500 capitalize">{user.role}</span>
              </div>
            )}

            {/* Status */}
            {user.status && (
              <div className="flex items-center gap-3 border-b pb-4">
                <UserX className="w-5 h-5 text-red-500" />
                <span className="text-default-500">{user.status}</span>
              </div>
            )}

            {/* Password Changed At */}
            {user.passwordChangedAt && (
              <div className="flex items-center gap-3 border-b pb-4">
                <KeyRound className="w-5 h-5 text-yellow-500" />
                <span className="text-default-500">
                  Password changed:
                  {new Date(user.passwordChangedAt).toLocaleDateString()}
                </span>
              </div>
            )}

            {/* Created At */}
            {user.createdAt && (
              <div className="flex items-center gap-3 border-b pb-4">
                <CalendarDays className="w-5 h-5 text-blue-500" />
                <span className="text-default-500">
                  Created: {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
            )}

            {/* Updated At */}
            {user.updatedAt && (
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-500" />
                <span className="text-default-500">
                  Updated: {new Date(user.updatedAt).toLocaleDateString()}
                </span>
              </div>
            )}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              {/* update user */}
              <div>
                <BZModal
                  buttonText="Edit User Details"
                  // title="Update User"
                  body={<UpdateUserForm user={user} />}
                />
              </div>
              {/* delete user */}
              <div>
                <BZModal
                  body={`Are you sure you want to delete ${user.name}?`}
                  buttonText="Delete this user"
                  title="Delete Confirmation"
                  onAction={() => handleDelete(user._id as string)}
                />
              </div>
            </div>
          </div>
        </CardBody>

        {/* Footer */}
        <div className="p-5 border-t text-right">
          <Link
            className="text-sm font-medium text-default-500 hover:text-indigo-600 transition"
            href="/admin/manageUser/userList"
          >
            ← Back to Users
          </Link>
        </div>
      </Card>
    </div>
  );
}

//
// "use client";

// import { TUser } from "@/types";
// import { Card, CardBody } from "@heroui/react";
// import { Avatar } from "@heroui/react";
// import Link from "next/link";
// import {
//   Mail,
//   Phone,
//   Shield,
//   Clock,
//   KeyRound,
//   UserX,
//   CalendarDays,
// } from "lucide-react";
// import BZModal from "@/components/modals/BZModal";
// import UpdateUserForm from "./UpdateUserForm";
// import { useDeleteUser } from "@/hooks/user.hook";
// import { useRouter } from "next/navigation";

// interface IProps {
//   user: TUser;
// }

// export default function UserDetail({ user }: IProps) {
//   const router = useRouter();
//   const { mutate: handleDeleteUser } = useDeleteUser();

//   // Delete handler (called from modal)
//   const handleDelete = (id: string) => {
//     handleDeleteUser(id);
//   };
//   // Soft-deleted message
//   // if (user?.isDeleted) {
//   //   return (
//   //     <div className="max-w-2xl mx-auto p-10 text-center text-green-600">
//   //       <p className="text-xl font-semibold">User deleted successfully ✅</p>
//   //       <button
//   //         className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//   //         onClick={() => router.push("/admin/manageUser/userList")}
//   //       >
//   //         Back to Users List
//   //       </button>
//   //     </div>
//   //   );
//   // }

//   return (
//     <>
//       {user ? (
//         <div className="max-w-5xl mx-auto p-10">
//           <Card className="overflow-hidden rounded-2xl shadow-xl border border-gray-200">
//             {/* Profile Header */}
//             <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-10 flex flex-col items-center">
//               <Avatar
//                 src={
//                   user.profilePhoto ||
//                   `https://ui-avatars.com/api/?name=${user.name}`
//                 }
//                 size="lg"
//                 className="w-28 h-28 border-4 border-white shadow-md"
//               />
//               <h2 className="mt-4 text-2xl font-bold text-white">
//                 {user.name}
//               </h2>
//               <p className="text-sm text-indigo-100">User ID: {user._id}</p>
//             </div>

//             {/* User Info */}
//             <CardBody className="p-10">
//               <h3 className="text-lg font-semibold text-gray-800 mb-6">
//                 User Information
//               </h3>
//               <div className="grid md:grid-cols-2 gap-8 text-sm">
//                 {/* Email */}
//                 <div className="flex items-center gap-3 border-b pb-4">
//                   <Mail className="w-5 h-5 text-indigo-500" />
//                   <span className="text-gray-700">{user.email}</span>
//                 </div>

//                 {/* Phone */}
//                 {user.mobileNumber && (
//                   <div className="flex items-center gap-3 border-b pb-4">
//                     <Phone className="w-5 h-5 text-green-500" />
//                     <span className="text-gray-700">{user.mobileNumber}</span>
//                   </div>
//                 )}

//                 {/* Role */}
//                 {user.role && (
//                   <div className="flex items-center gap-3 border-b pb-4">
//                     <Shield className="w-5 h-5 text-orange-500" />
//                     <span className="text-gray-700 capitalize">
//                       {user.role}
//                     </span>
//                   </div>
//                 )}

//                 {/* Status */}
//                 {user.status && (
//                   <div className="flex items-center gap-3 border-b pb-4">
//                     <UserX className="w-5 h-5 text-red-500" />
//                     <span className="text-gray-700">{user.status}</span>
//                   </div>
//                 )}

//                 {/* Password Changed At */}
//                 {user.passwordChangedAt && (
//                   <div className="flex items-center gap-3 border-b pb-4">
//                     <KeyRound className="w-5 h-5 text-yellow-500" />
//                     <span className="text-gray-700">
//                       Password changed:{" "}
//                       {new Date(user.passwordChangedAt).toLocaleDateString()}
//                     </span>
//                   </div>
//                 )}

//                 {/* Created At */}
//                 {user.createdAt && (
//                   <div className="flex items-center gap-3 border-b pb-4">
//                     <CalendarDays className="w-5 h-5 text-blue-500" />
//                     <span className="text-gray-700">
//                       Created: {new Date(user.createdAt).toLocaleDateString()}
//                     </span>
//                   </div>
//                 )}

//                 {/* Updated At */}
//                 {user.updatedAt && (
//                   <div className="flex items-center gap-3">
//                     <Clock className="w-5 h-5 text-purple-500" />
//                     <span className="text-gray-700">
//                       Updated: {new Date(user.updatedAt).toLocaleDateString()}
//                     </span>
//                   </div>
//                 )}

//                 {/* Actions */}
//                 <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
//                   {/* Edit */}
//                   <BZModal
//                     buttonText="Edit User Details"
//                     body={<UpdateUserForm user={user} />}
//                   />
//                   {/* Delete */}
//                   <BZModal
//                     buttonText="Delete this user"
//                     title="Delete Confirmation"
//                     body={`Are you sure you want to delete ${user.name}?`}
//                     onAction={() => handleDelete(user._id as string)}
//                   />
//                 </div>
//               </div>
//             </CardBody>

//             {/* Footer */}
//             <div className="p-5 border-t bg-gray-50 text-right">
//               <Link
//                 href="/admin/manageUser/userList"
//                 className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
//               >
//                 ← Back to Users
//               </Link>
//             </div>
//           </Card>
//         </div>
//       ) : (
//         <div className="max-w-2xl mx-auto p-10 text-center text-green-600">
//           <p className="text-xl font-semibold">User deleted successfully ✅</p>
//           <button
//             className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//             onClick={() => router.push("/admin/manageUser/userList")}
//           >
//             Back to Users List
//           </button>
//         </div>
//       )}
//     </>
//   );
// }
