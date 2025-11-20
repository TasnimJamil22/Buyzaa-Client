// "use client";
// import { siteConfig } from "@/config/site";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Badge,
// } from "@heroui/react";
// import { Button } from "@heroui/button";
// import { Kbd } from "@heroui/kbd";
// // import { Link } from "@heroui/link";
// import { Input } from "@heroui/input";
// import { link as linkStyles } from "@heroui/theme";
// import NextLink from "next/link";
// import clsx from "clsx";
// import NavbarDropdown from "./NavbarDropdown";
// import { ThemeSwitch } from "./theme-switch";
// import { useUser } from "@/context/user.provider";
// import { CartIcon } from "./icons";
// import { useCart } from "@/context/cart.provider";
// export default function App() {
//   const { user } = useUser();
//   const { cartItems } = useCart();
//   return (
//     <Navbar>
//       <NavbarContent className="hidden sm:flex gap-4" justify="start">
//         <NextLink className="flex justify-start items-center gap-1" href="/">
//           <p className="font-dancing text-4xl text-[#a17c37] font-bold-800  ">
//             Buyzaa{" "}
//           </p>
//         </NextLink>
//         <ul className="hidden lg:flex gap-4 justify-start ml-2 text-[#a17c37] ">
//           {siteConfig.navItems.map((item) => (
//             <NavbarItem key={item.href}>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium"
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </NextLink>
//             </NavbarItem>
//           ))}
//         </ul>
//       </NavbarContent>

//       <NavbarContent justify="end">
//         <NavbarItem className="hidden sm:flex gap-2">
//           <ThemeSwitch />
//         </NavbarItem>
//         {user?.email ? (
//           <NavbarItem className="hidden sm:flex gap-2">
//             <NavbarDropdown />
//           </NavbarItem>
//         ) : (
//           <NavbarItem className="hidden sm:flex gap-2">
//             <NextLink href="/login">Login</NextLink>
//           </NavbarItem>
//         )}
//         {/* cart icon */}
//         {user?.role !== "ADMIN" && (
//           <NavbarItem className="hidden sm:flex gap-2">
//             <NextLink href="/profile/cart">
//               <Badge color="danger" content={cartItems.length}>
//                 <CartIcon />
//               </Badge>
//             </NextLink>
//           </NavbarItem>
//         )}
//       </NavbarContent>
//     </Navbar>
//   );
// }

// "use client";
// import {
//   Navbar as HeroUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
//   NavbarMenuToggle,
// } from "@heroui/navbar";
// import { Link } from "@heroui/link";
// import { link as linkStyles } from "@heroui/theme";
// import NextLink from "next/link";
// import clsx from "clsx";
// import { usePathname, useRouter } from "next/navigation";
// import { Badge } from "@heroui/badge";

// import NavbarDropdown from "./NavbarDropdown";

// import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";
// import { MenuIcon } from "@/components/icons";
// import { CartIcon } from "@/components/icons";
// import { useUser } from "@/context/user.provider";
// import { logoutUser } from "@/services/AuthService";
// import { protectedRoutes } from "@/constant";
// import { useCart } from "@/context/cart.provider";
// import { useEffect, useState } from "react";
// import { Menu, MenuSquare, X } from "lucide-react";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, setUser, setIsLoading } = useUser();
//   const { cartItems } = useCart();
//   return (
//     <HeroUINavbar>
//       <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-start items-center gap-1" href="/">
//             <p className="font-dancing text-4xl text-[#a17c37] font-bold-800  ">
//               Buyzaa
//             </p>
//           </NextLink>
//         </NavbarBrand>
//         <ul className="hidden lg:flex gap-4 justify-start ml-2 text-[#a17c37] ">
//           {siteConfig.navItems.map((item) => (
//             <NavbarItem key={item.href}>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium"
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </NextLink>
//             </NavbarItem>
//           ))}
//         </ul>
//       </NavbarContent>

//       <NavbarContent
//         className="hidden sm:flex basis-1/5 sm:basis-full"
//         justify="end"
//       >
//         <ThemeSwitch />
//         <CartIcon className="text-[#a17c37]" width={40} height={40} />

//         {user?.email ? (
//           <NavbarItem className="hidden sm:flex gap-2">
//             <NavbarDropdown />
//           </NavbarItem>
//         ) : (
//           <NavbarItem className="hidden sm:flex gap-2">
//             <NextLink href="/login">Login</NextLink>
//           </NavbarItem>
//         )}
//         {/* cart icon */}
//         {user?.role !== "ADMIN" && (
//           <NavbarItem className="hidden sm:flex gap-2">
//             <NextLink href="/profile/cart">
//               <Badge color="danger" content={cartItems.length}>
//                 <CartIcon />
//               </Badge>
//             </NextLink>
//           </NavbarItem>
//         )}
//       </NavbarContent>
//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         <ThemeSwitch />
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item.label}-${index}`}>
//               <Link
//                 className={`
//             block
//             text-lg
//             font-medium
//             px-4 py-2
//             rounded-lg
//             transition
//             text-default-500
//             hover:bg-gray-100
//           `}
//                 href={item.href} // functional link
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </HeroUINavbar>
//   );
// }

"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { Badge } from "@heroui/badge";

import NavbarDropdown from "./NavbarDropdown";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { CartIcon } from "@/components/icons";
import { useUser } from "@/context/user.provider";
import { logoutUser } from "@/services/AuthService";
import { protectedRoutes } from "@/constant";
import { useCart } from "@/context/cart.provider";
import { useEffect, useState } from "react";

export default function Navbar() {
  //this is our hook useUser to get user from UserContext
  const { user, setUser, setIsLoading } = useUser();
  console.log(user);
  const router = useRouter();
  const pathname = usePathname();
  const { cartItems } = useCart();
  // const handleLogout = () => {
  //   logoutUser();
  //   setUser(null);
  //   setIsLoading(true);
  //   if (protectedRoutes.some((route) => pathname.match(route))) {
  //     router.push("/");
  //   }
  // };

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="sticky top-0 z-[100]"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-dancing text-4xl text-[#a17c37] font-bold-800  ">
              Buyzaa
            </p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2 text-[#a17c37] ">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        {user?.email ? (
          <NavbarItem className="hidden sm:flex gap-2">
            <NavbarDropdown />
            <p>{user?.email}</p>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden sm:flex gap-2">
            <NextLink href="/login">Login</NextLink>
          </NavbarItem>
        )}
        {/* cart icon */}
        {user?.role !== "ADMIN" && (
          <NavbarItem className="hidden sm:flex gap-2">
            <NextLink href="/profile/cart">
              <Badge color="danger" content={cartItems.length}>
                <CartIcon />
              </Badge>
            </NextLink>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu> */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className={`
            block
            text-lg
            font-medium
            px-4 py-2
            rounded-lg
            transition
            text-default-500
            hover:bg-gray-100
          `}
                href={item.href} // functional link
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
}
