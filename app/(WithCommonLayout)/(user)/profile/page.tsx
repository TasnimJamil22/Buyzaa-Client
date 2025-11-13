import ProfileCard from "@/components/UI/Profile/ProfileCard";
import { getCurrentUser } from "@/services/AuthService";
import { getMyProfile } from "@/services/Profile";
import { TUser } from "@/types";

export default function ProfilePage() {
  return (
    <div className="min-h-screen   py-10">
      <ProfileCard />
    </div>
  );
}
// export default async function ProfilePage() {
//   const user = await getCurrentUser();

//   console.log(user);

//   return (
//     <div className="min-h-screen bg-gray-50 py-10">
//       <ProfileCard user={user} />
//     </div>
//   );
// }

//2
// "use client";

// import { useState, useEffect, ChangeEvent } from "react";
// import { useUser } from "@/context/user.provider";
// import BZForm from "@/components/form/BZForm";
// import BZInput from "@/components/form/BZInput";
// import { FieldValues, SubmitHandler } from "react-hook-form";
// import { useUpdateUser } from "@/hooks/user.hook";
// import { TUser } from "@/types";
// interface UpdateUserParams {
//   userId: string;
//   updatedData: Partial<TUser> | FormData; // ✅ allow FormData
// }

// export default function ProfilePage() {
//   const { user } = useUser();
//   const {
//     mutate: handleUpdateUser,
//     isPending,
//     isSuccess,
//     error,
//   } = useUpdateUser();
//   const [showPassword, setShowPassword] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [imageFiles, setImageFiles] = useState<File[] | []>([]);
//   const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
//   console.log(imageFiles);
//   console.log("p", imagePreviews);

//   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//     console.log("Submitting user:", data);

//     const formData = new FormData();

//     // Append all text fields from data
//     Object.keys(data).forEach((key) => {
//       const value = data[key];
//       if (value !== undefined && value !== null && value !== "") {
//         formData.append(key, value);
//       }
//     });

//     // Append profile photo from state if it exists
//     if (imageFiles.length > 0) {
//       formData.append("profilePhoto", imageFiles[0]);
//     }

//     // Send to your update user service
//     handleUpdateUser({ userId: user!._id as string, updatedData: formData });

//     console.log("FormData entries:", Array.from(formData.entries()));
//   };

//   // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
//   //   console.log("Submitting user:", data);

//   //   const formData = new FormData();

//   //   // Append all text fields from data
//   //   Object.keys(data).forEach((key) => {
//   //     const value = data[key];
//   //     if (value !== undefined && value !== null && value !== "") {
//   //       formData.append(key, value);
//   //     }
//   //   });

//   //   // Append profile photo if it exists (assuming you store the file in `data.profilePhoto`)
//   //   if (data.profilePhoto && data.profilePhoto[0]) {
//   //     formData.append("profilePhoto", data.profilePhoto[0]);
//   //   }

//   //   // Send to your create user hook/service
//   //   handleUpdateUser({ userId: user!._id as string, updatedData: formData }); // service must accept FormData
//   //   console.log({ userId: user!._id as string, updatedData: formData });
//   // };

//   //
//   // const onSubmit: SubmitHandler<FieldValues> = (data: Partial<TUser>) => {
//   //   if (!user?._id) return;

//   //   handleUpdateUser({
//   //     userId: user._id,
//   //     updatedData: data,
//   //   });
//   //   console.log(user);
//   // };
//   useEffect(() => {
//     if (isSuccess) {
//       setSuccessMsg("Profile updated successfully!");
//       const timer = setTimeout(() => setSuccessMsg(""), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [isSuccess]);

//   if (!user)
//     return (
//       <div className="text-center mt-10 text-gray-500">Loading profile...</div>
//     );
//   //handle image
//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     // console.log(e.target.files![0]);
//     const file = e.target.files![0];
//     setImageFiles((prev) => [...prev, file]);
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreviews((prev) => [...prev, reader.result as string]);
//       };
//       //to read as data url
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-12 p-6   rounded-2xl shadow-lg">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//         My Profile
//       </h1>

//       {/* Profile Avatar */}
//       <div className="flex justify-center mb-6">
//         <img
//           src={user.profilePhoto || "/default-avatar.png"}
//           alt="Profile"
//           className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
//         />
//       </div>

//       {/* Success / Error Messages */}
//       {successMsg && (
//         <div className="mb-4 px-4 py-2 bg-green-100 text-green-800 rounded-lg text-center">
//           {successMsg}
//         </div>
//       )}
//       {error && (
//         <div className="mb-4 px-4 py-2 bg-red-100 text-red-800 rounded-lg text-center">
//           Failed to update profile
//         </div>
//       )}

//       <BZForm onSubmit={onSubmit} defaultValues={user || {}}>
//         <div className="grid grid-cols-1 gap-4">
//           <BZInput name="name" label="Full Name" />
//           <BZInput name="email" label="Email" />

//           <div>
//             <BZInput
//               name="password"
//               label="Password"
//               type={showPassword ? "text" : "password"}
//             />
//             <label className="flex items-center gap-2 text-sm mt-1 text-gray-600">
//               <input
//                 type="checkbox"
//                 checked={showPassword}
//                 onChange={() => setShowPassword(!showPassword)}
//                 className="accent-[#c9a14a]"
//               />
//               Show password
//             </label>
//           </div>
//           {/* <div className="flex items-center justify-between">
//             <BZInput
//               name="password"
//               label="Password"
//               type="password"
//               disabled
//               defaultValue="*********"
//             />
//             <button
//               type="button"
//               onClick={() => setShowChangePasswordModal(true)}
//               className="text-sm text-[#c9a14a] underline hover:text-[#b8923a]"
//             >
//               Change Password
//             </button>
//           </div> */}

//           <BZInput name="mobileNumber" label="Mobile Number" />
//           <BZInput name="profilePhoto" label="Profile Photo (URL)" />
//           <div className="min-w-fit flex-1 border">
//             <label htmlFor="image">Upload Image</label>
//             <input
//               multiple
//               type="file"
//               id="image"
//               className="hidden"
//               onChange={(e) => handleImageChange(e)}
//             />
//           </div>
//           <div>
//             {imagePreviews.length > 0 &&
//               imagePreviews.map((imageDataUrl) => (
//                 <div key={imageDataUrl} className="p-5  border rounded-lg">
//                   <img
//                     className="h-full w-full object-cover object-center  rounded-lg"
//                     src={imageDataUrl}
//                     alt=""
//                   />
//                 </div>
//               ))}
//           </div>
//         </div>

//         <button
//           type="submit"
//           disabled={isPending}
//           className="mt-6 w-full bg-gradient-to-r from-[#c9a14a] to-[#a17c37] hover:from-[#a17c37] text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
//         >
//           {isPending ? "Updating..." : "Update Profile"}
//         </button>
//       </BZForm>
//     </div>
//   );
// }

//1

// "use client";

// import { useState } from "react";
// // adjust path as needed
// import { useUser } from "@/context/user.provider"; // assuming you have a user context
// import BZForm from "@/components/form/BZForm";
// import BZInput from "@/components/form/BZInput";
// import { FieldValues, SubmitHandler } from "react-hook-form";
// import { useUpdateUser } from "@/hooks/user.hook";
// import { TUser } from "@/types";

// export default function ProfilePage() {
//   const { user } = useUser(); // your current logged-in user

//   const { mutate: handleUpdateUser, isPending, isSuccess } = useUpdateUser();

//   const onSubmit: SubmitHandler<FieldValues> = (data: Partial<TUser>) => {
//     handleUpdateUser({
//       userId: user?._id as string,
//       updatedData: data,
//     });
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-4   rounded-xl shadow-md">
//       <h1 className="text-2xl font-bold mb-6">My Profile</h1>
//       <BZForm onSubmit={onSubmit} defaultValues={user || {}}>
//         <BZInput name="name" label="Full Name" />
//         <BZInput name="email" label="Email" />
//         <BZInput name="password" label="Password" type="password" />

//         <BZInput name="mobileNumber" label="Mobile Number" />
//         <BZInput name="profilePhoto" label="Profile Photo (URL)" />

//         <button
//           type="submit"
//           disabled={isPending}
//           className="w-full bg-gradient-to-r from-[#c9a14a] to-[#a17c37] hover:from-[#a17c37] text-white py-2 rounded-lg transition disabled:opacity-50"
//         >
//           {isPending ? "Updating..." : "Update User"}
//         </button>
//       </BZForm>
//     </div>
//   );
// }
