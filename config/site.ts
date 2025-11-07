export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },

    // {
    //   label: "UserList",
    //   href: "/admin/manageUser/userList",
    // },
    // {
    //   label: "Categories",
    //   href: "/admin/categories",
    // },

    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Cart",
      href: "/profile/cart",
    },

    {
      label: "About",
      href: "/about",
    },
  ],
};
