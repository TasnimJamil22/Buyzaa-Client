"use client";
import { Button } from "@heroui/button";
import Link from "next/link";
import SidebarOptions from "./SidebarOptions";
import { useUser } from "@/context/user.provider";
import { adminLinks, userLinks } from "./constants";

export default function Sidebar() {
  const { user } = useUser();
  return (
    <aside className="w-84 flex flex-col bg-gradient-to-b from-default-100  rounded-xl">
      <div className="p-2 bg-transparent rounded-lg flex flex-col justify-between flex-grow">
        <div>
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-sm">
            IMG
          </div>
          <h1 className="text-2xl font-bold mt-4">{user?.name}</h1>
          <p className="text-base  ">{user?.email}</p>
        </div>

        <Button as={Link} href={"/profile/create-post"} className="mt-4 w-full">
          Create a Post
        </Button>
      </div>

      <div className="p-4 mt-4 bg-gradient-to-b from-default-100  rounded-xl">
        <nav>
          <SidebarOptions
            links={user?.role === "USER" ? userLinks : adminLinks}
          />
        </nav>
      </div>
    </aside>
  );
}
