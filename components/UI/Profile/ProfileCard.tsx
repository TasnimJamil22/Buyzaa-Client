// "use client";

// import { useUser } from "@/context/user.provider";
// import { uploadImage } from "@/services/Profile";

// export default function ProfileCard() {
//   const { user, setUser } = useUser();

//   const handleUpload = async (file: File) => {
//     if (!user?._id) return;

//     try {
//       const formData = new FormData();
//       formData.append("profilePhoto", file);

//       // Upload image to backend + Cloudinary + DB
//       const uploadedUrl = await uploadImage(formData);

//       // Update frontend state
//       setUser({ ...user, profilePhoto: uploadedUrl });

//       console.log("✅ Profile image uploaded:", uploadedUrl);
//     } catch (error: any) {
//       console.error("Failed to upload profile image:", error.message);
//     }
//   };

//   return (
//     <div className="rounded-2xl shadow-xl p-8 max-w-md mx-auto flex flex-col items-center">
//       <div className="w-32 h-32 mb-6 relative">
//         <img
//           src={
//             user?.profilePhoto ||
//             "https://cdn-icons-png.flaticon.com/512/847/847969.png"
//           }
//           alt="Profile Photo"
//           className="w-full h-full object-cover rounded-full border-4 border-white"
//         />

//         <label
//           htmlFor="profileUpload"
//           className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-full cursor-pointer"
//         >
//           Upload
//         </label>

//         <input
//           id="profileUpload"
//           type="file"
//           accept="image/*"
//           className="hidden"
//           onChange={(e) => {
//             const file = e.target.files?.[0];
//             if (file) handleUpload(file);
//           }}
//         />
//       </div>

//       <h2>{user?.name || "Username"}</h2>
//       <p>{user?.email}</p>
//       <p>{user?.mobileNumber}</p>
//     </div>
//   );
// }

"use client";

import ProfileUpdate from "./ProfileUpdate";

import BZModal from "@/components/modals/BZModal";
import { useUser } from "@/context/user.provider";
import { uploadImage } from "@/services/Profile";
// import { uploadImage } from "@/services/Profile";

export default function ProfileCard() {
  const { user, setUser } = useUser();

  // console.log(user?.name);
  const handleUpload = async (file: File) => {
    if (!user?._id) return;

    try {
      // 1️⃣ Upload file to backend (Multer + Cloudinary)
      const formData = new FormData();

      formData.append("profilePhoto", file);

      // This endpoint must exist in your backend
      const uploadedUrl: string = await uploadImage(formData);

      // 2️⃣ Update local state with backend URL
      setUser({ ...user, profilePhoto: uploadedUrl });

      // console.log("✅ Profile image uploaded and saved:", uploadedUrl);
    } catch (error: any) {
      console.error("Failed to upload profile image:", error.message);
    }
  };

  // console.log("pro pic", user?.profilePhoto);
  // console.log(user);

  return (
    <div className=" border rounded-2xl shadow-xl p-8 max-w-md mx-auto flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Profile Photo with gradient border */}
      <div className="w-32 h-32 mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full p-1 animate-pulse" />
        {/* <img
          src={user?.profilePhoto || "/default-profile.png"}
          alt="Profile Photo"
          className="w-full h-full object-cover rounded-full border-4 border-white relative z-10"
        /> */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Profile Image */}
          <img
            alt=""
            className="w-full h-full object-cover rounded-full border-4 border-white"
            src={
              user?.profilePhoto ||
              "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
          />

          {/* Upload Button */}
          <label
            className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg cursor-pointer transition-all duration-300 flex items-center space-x-1"
            htmlFor="profileUpload"
          >
            <span>Upload</span>
          </label>

          {/* Hidden File Input */}
          <input
            accept="image/*"
            className="hidden"
            id="profileUpload"
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                handleUpload(file); // just call your function
              }
            }}
          />
        </div>
      </div>

      {/* users others info  */}
      {/* Username */}
      <h2 className="text-3xl font-bold text-default-500 mb-2">
        username: {user?.name || "Username"}
      </h2>

      {/* Contact Info */}
      <div className="flex flex-col items-center text-default-600 space-y-1 pb-4">
        {user?.mobileNumber && <p>mobile No: {user.mobileNumber}</p>}
        <p className="text-sm">email: {user?.email}</p>
      </div>
      <div>
        <BZModal
          body={user && <ProfileUpdate user={user} />}
          buttonText="Update profile info"
        />
      </div>

      {/* Optional subtle footer / bio */}
      {/* <p className="mt-4 text-center text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </div>
  );
}
