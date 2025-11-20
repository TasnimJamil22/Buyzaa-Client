import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "./services/AuthService";

const AuthRoutes = ["/login", "/register"];

type Role = keyof typeof roleBasedRoutes;

//   /^\/profile/ → matches any URL that starts with /profile
// e.g. /profile, /profile/settings, /profile/edit
//   /^\/admin/ → matches any URL that starts with /admin

// e.g. /admin, /admin/dashboard, /admin/users
const roleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

export default async function middleware(request: NextRequest) {
  const user = await getCurrentUser();
  //current pathname
  const { pathname } = request.nextUrl;

  //if no user:
  if (!user) {
    //user directly goes to login/register page .so let him go to that page.
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      //user doesn't directly go to the login page,wanated to go another protected page.but needs to login first.After login   he can go to that page,so we redirect them to that page he wanted to go
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url),
      );
    }
  }
  //if user:
  //checking users role

  //user?.role--------------->Checks if user exists and has a role
  //roleBasedRoutes[user?.role as Role]------------->Gets the allowed routes for that role
  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];

    // console.log(routes);
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/profile",
    "/profile/:page*",
    "/admin/:admin*",
    "/login",
    "/register",
  ],
};
