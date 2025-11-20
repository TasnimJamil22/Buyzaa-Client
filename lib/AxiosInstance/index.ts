import axios from "axios";
// import { cookies } from "next/headers";
// Using js-cookie

import Cookies from "js-cookie";

import envConfig from "@/config/envConfig";
const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
  // withCredentials: true, // ✅ send cookies automatically
});

// Attach JWT token automatically
axiosInstance.interceptors.request.use((config) => {
  // const token = localStorage.getItem("accessToken"); // or use cookie
  const token = Cookies.get("accessToken"); // must be defined

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

//interceptor part for sending access token etc with data
// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   async function (config) {
//     const cookieStore = await cookies();
//     const accessToken = cookieStore.get("accessToken")?.value;

//     if (accessToken) {
//       config.headers.Authorization = accessToken;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function onRejected(error) {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;

// // "use server";
// import envConfig from "@/config/envConfig";
// import axios from "axios";
// import { cookies } from "next/headers";

// const axiosInstance = axios.create({
//   baseURL: envConfig.baseApi,
// });

// //interceptor part for sending access token etc with data
// // Add a request interceptor
// axiosInstance.interceptors.request.use(
//   async function (config) {
//     const cookieStore = await cookies();
//     const accessToken = cookieStore.get("accessToken")?.value;

//     if (accessToken) {
//       config.headers.Authorization = accessToken;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function onRejected(error) {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
