import axiosInstance from "@/lib/AxiosInstance";
import { TUser, TUserProfileUpdate } from "@/types";

export const getMyProfile = async () => {
  const { data } = await axiosInstance.get("/profile/");
  return data;
};
//upload image
// services/Profile.ts
// export const uploadImage = async (formData: FormData): Promise<string> => {
//   const response = await axiosInstance.patch("/profile/uploadImage", formData);
//   if (response.data.success) {
//     return response.data.imageUrl; // ✅ must be string
//   }
//   throw new Error(response.data.message || "Upload failed");
// };

// export const uploadImage = async (formData: FormData): Promise<string> => {
//   try {
//     const response = await axiosInstance.patch(
//       "/profile/uploadImage",
//       formData
//     );
//     // ❌ Don’t set Content-Type manually; Axios handles it properly

//     if (response.data.success) {
//       return response.data.imageUrl; // ✅ returned URL from backend
//       // return response.data.data;
//     } else {
//       throw new Error(response.data.message || "Upload failed");
//     }
//   } catch (error: any) {
//     console.error("Image upload error:", error);
//     throw new Error(error.message || "Something went wrong");
//   }
// };

// export const updateProfilePhoto = async (imageUrl: string): Promise<void> => {
//   try {
//     await axiosInstance.patch("/profile/updateProfilePhoto", {
//       profilePhoto: imageUrl,
//     });
//   } catch (error: any) {
//     console.error("Failed to update profile photo:", error);
//     throw new Error(error.message || "Could not update photo");
//   }
// };
// export const updateProfilePhoto = async (profilePhoto: string) => {
//   const response = await axiosInstance.patch("/profile/uploadImage", {
//     profilePhoto,
//   });
//   return response.data;
// };
//

// Upload image to backend
export const uploadImage = async (formData: FormData): Promise<string> => {
  const { data } = await axiosInstance.patch("/profile/uploadImage", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  if (!data.success) throw new Error(data.message || "Upload failed");

  return data.imageUrl;
};
