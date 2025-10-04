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
    //   label: "Cart",
    //   href: "/cart",
    // },

    {
      label: "UserList",
      href: "/admin/manageUser/userList",
      // children: [
      //   {
      //     label: "User List",
      //     href: "/admin/manageUser/userList",
      //   },
      //   // add more sub-links later
      // ],
    },

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
    // {
    //   label: "Cart",
    //   href: "/cart",
    // },

    {
      label: "About",
      href: "/about",
    },
  ],
};
