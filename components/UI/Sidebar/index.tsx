// "use client";
// import { Button } from "@heroui/button";
// import Link from "next/link";
// import SidebarOptions from "./SidebarOptions";
// import { useUser } from "@/context/user.provider";
// import { adminLinks, userLinks } from "./constants";

// export default function Sidebar() {
//   const { user } = useUser();
//   return (
//     <aside className="w-84 flex flex-col bg-default-50   rounded-xl  border-r border-gray-300">
//       <div className="p-2 bg-transparent rounded-lg flex flex-col justify-between flex-grow">
//         <div className=" mx-auto  border border-gray-200 rounded-2xl px-12 py-4 shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
//           {/* Profile Image */}
//           <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-[#f0c14b]/30 via-[#d1a652]/20 to-[#fff]/10 rounded-full flex items-center justify-center   text-sm font-medium shadow-inner">
//             IMG
//           </div>

//           {/* User Name */}
//           <h1 className="mt-4 text-2xl font-semibold text-[#a17c37] tracking-wide">
//             {user?.name}
//           </h1>

//           {/* User Email */}
//           <p className="mt-1 text-sm text-[#8b6d2f]">{user?.email}</p>
//         </div>

//         {/* <Button as={Link} href={"/profile/create-post"} className="mt-4 w-full">
//           Create a Post
//         </Button> */}
//       </div>

//       <div className="p-4 mt-4   rounded-xl">
//         <nav>
//           <SidebarOptions
//             links={user?.role === "USER" ? userLinks : adminLinks}
//           />
//         </nav>
//       </div>
//     </aside>
//   );
// }
"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import SidebarOptions from "./SidebarOptions";
import { adminLinks, userLinks } from "./constants";

import { useUser } from "@/context/user.provider";

export default function Sidebar() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Mobile toggle button */}
      <button
        className="md:hidden fixed top-16 left-4 z-50 bg-[#a17c37] text-white p-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* 🔹 Overlay when sidebar is open on mobile */}
      {isOpen && (
        // <div
        //   className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
        //   onClick={() => setIsOpen(false)}
        // />
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          role="button"
          tabIndex={0}
          onClick={() => setIsOpen(false)}
          onKeyDown={() => setIsOpen(false)} // accessibility for keyboard
        />
      )}

      {/* 🔹 Sidebar */}
      <aside
        className={`
    fixed left-0 top-16 h-[calc(100%-4rem)] w-72 md:w-84
    bg-default-50 border-r border-default-100 rounded-xl shadow-lg p-4
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:relative md:h-full md:top-0
    z-20
  `}
      >
        {/* Sidebar content */}
        <div className="flex flex-col space-y-6">
          {/* Profile Card */}
          <div className="mx-auto border border-gray-200 rounded-2xl px-12 py-4 shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-yellow-300 to-white shadow-lg overflow-hidden relative">
              {/* Inner circle for shadow effect */}
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  alt=""
                  className="w-full h-full object-cover object-center rounded-full transition-transform duration-300 hover:scale-105"
                  src={
                    user?.profilePhoto ||
                    "https://cdn-icons-png.flaticon.com/512/847/847969.png" // fallback
                  }
                />
              </div>
            </div>

            <h1 className="font-dancing mt-4 text-4xl font-semibold text-[#a17c37] tracking-wide">
              {user?.name}
            </h1>
            <p className="mt-1 text-sm text-[#8b6d2f]">{user?.email}</p>
          </div>

          {/* Sidebar Options */}
          <nav>
            <SidebarOptions
              links={user?.role === "USER" ? userLinks : adminLinks}
            />
          </nav>
        </div>
      </aside>
    </>
  );
}
