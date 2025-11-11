"use client";

import { Input } from "@heroui/input";
import { SearchIcon } from "lucide-react";
import BannerSearch from "./BannerSearch";
import { useGetAllProducts } from "@/hooks/product.hook";
import { TProduct } from "@/types";
import { useState } from "react";
interface IProps {
  products: TProduct[];
}
export default function Landing({ products }: IProps) {
  return (
    <div className="relative h-[calc(100vh-100px)] w-full bg-[url('/bannerImg2.png')] bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-lg">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Headline */}
        <h1 className="font-dancing text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Find Your Perfect Art Piece
        </h1>
        {/* Tagline */}
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Explore unique collections of paintings, sculptures, and creative
          crafts tailored just for you.
        </p>
        {/* Search Section */}
        <div className="max-w-xl mx-auto w-full px-4">
          <form className="flex-1">
            <Input
              placeholder="Search"
              classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
              }}
              startContent={<SearchIcon />}
              type="text"
            />
          </form>
        </div>
        {/* <BannerSearch onSearch={handleSearch} /> */}
        {/* 🖼️ Product display
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <div
                key={p._id}
                className="bg-white text-black p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h2 className="font-semibold">{p.name}</h2>
                <p>${p.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-300 col-span-full">No results found</p>
          )}
        </div> */}
      </div>
    </div>
  );
}

// module.exports = {
//   plugins: {
//     "@tailwindcss/postcss": {},
//   },
// };
// module.exports = {
//   plugins: {
//     "@tailwindcss/postcss": {},
//     autoprefixer: {},
//   },
// };

// import React from "react";
// import { Button } from "@heroui/button";

// export default function LandPage() {
//   return (
//     <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12">
//       {/* Left Content */}
//       <div className="md:w-1/2 space-y-6 text-center md:text-left">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100">
//           Discover Unique Art Pieces
//         </h1>
//         <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
//           Browse and buy amazing artworks from talented artists worldwide.
//           Original paintings, prints, and more.
//         </p>
//         <div className="flex justify-center md:justify-start gap-4">
//           <Button color="primary">Get Started</Button>
//           <Button color="default" variant="flat">
//             Learn More
//           </Button>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
//         <img
//           src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Artistic Illustration"
//           className="rounded-xl shadow-lg w-full max-w-md"
//         />
//       </div>
//     </section>
//   );
// }

//2

// import { SearchIcon } from "@/components/icons";
// import { Input } from "@heroui/input";

// export default function LandPage() {
//   return (
//     <div>
//       {/* <div className="min-h-screen w-full bg-[url('/sunglass2.jpg')] sm:bg-cover bg-contain bg-no-repeat bg-center pb-32 mb-32"> */}
//       {/* <div className="h-screen w-full  bg-[url('/sunglass2.jpg')] bg-cover bg-no-repeat bg-center "> */}
//       <div className="h-[calc(100vh-100px)] w-full bg-[url('/bannerImg2.png')] bg-cover bg-no-repeat bg-center pb-32">
//         {/* <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
//         Found X
//       </h1> */}

//         <div className="max-w-xl mx-auto w-full px-4">
//           <form className="flex-1">
//             <Input
//               placeholder="Search"
//               classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
//               startContent={<SearchIcon />}
//               type="text"
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

//3
