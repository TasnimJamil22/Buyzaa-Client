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
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  CartIcon,
} from "@/components/icons";
import { useUser } from "@/context/user.provider";
import { logoutUser } from "@/services/AuthService";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constant";
import NavbarDropdown from "./NavbarDropdown";
import { Badge } from "@heroui/badge";
import { useCart } from "@/context/cart.provider";

export default function Navbar() {
  //this is our hook useUser to get user from UserContext
  const { user, setUser, setIsLoading } = useUser();
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
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Buyzaa</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
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
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden sm:flex gap-2">
            <NextLink href="/login">Login</NextLink>
          </NavbarItem>
        )}
        {/* cart icon */}
        {/* <NavbarItem className="hidden sm:flex gap-2">
          <NextLink href="/cart">
            <Badge content={cartItems.length} color="danger">
              <CartIcon />
            </Badge>
          </NextLink>
        </NavbarItem> */}
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
                href={item.href} // make it functional
                className={`
                  block
                  text-lg
                  font-medium
                  px-4 py-2
                  rounded-lg
                  transition
                  ${
                    pathname === item.href
                      ? "bg-indigo-100 text-indigo-700"
                      : index === 2
                        ? "text-indigo-600 hover:bg-indigo-50"
                        : index === siteConfig.navMenuItems.length - 1
                          ? "text-red-600 hover:bg-red-50"
                          : "text-gray-900 hover:bg-gray-100"
                  }
                `}
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
