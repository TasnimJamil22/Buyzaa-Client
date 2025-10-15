"use client";

import { protectedRoutes } from "@/constant";
import { useUser } from "@/context/user.provider";
import { logoutUser } from "@/services/AuthService";

import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// import { Link } from "@heroui/link";

export default function NavbarDropdown() {
  const { user, setIsLoading: userLoading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logoutUser();

    // router.push("/");
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
    userLoading(true);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      {user?.role === "USER" ? (
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="settings">
            <Link href="/profile/settings">Settings </Link>
          </DropdownItem>
          <DropdownItem key="profile">
            <Link href="/profile">Profile</Link>
          </DropdownItem>
          <DropdownItem key="createpost">
            <Link href="/profile/create-post">Creat Post</Link>
          </DropdownItem>
          <DropdownItem
            onClick={() => handleLogout()}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      ) : (
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="admin">
            <Link href="/admin">Admin</Link>
          </DropdownItem>

          <DropdownItem key="userList">
            <Link href="/admin/manageUser/userList">User List</Link>
          </DropdownItem>
          <DropdownItem key="categories">
            <Link href="/admin/categories">Categories</Link>
          </DropdownItem>
          {/* <DropdownItem key="createpost">
            <Link href="/profile/create-post">Creat Post</Link>
          </DropdownItem> */}
          <DropdownItem
            onClick={() => handleLogout()}
            key="delete"
            className="text-danger"
            color="danger"
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
}
