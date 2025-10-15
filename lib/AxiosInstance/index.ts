import envConfig from "@/config/envConfig";
import axios from "axios";
// import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
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
