// import { Navbar } from "@/components/navbar";
import Navbar from "@/components/navbar";
import Container from "@/components/UI/Container";
import Sidebar from "@/components/UI/Sidebar";
import { ReactNode } from "react";
import Cart from "../(user)/profile/cart/page";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>User Profile Layout</h1>

      {/* <main> {children}</main> */}

      {/* <div className="flex ">
        <div className="w-4/5">{children}</div>
        <div className="w-1/5">
          <Cart />
        </div>
      </div> */}
      <div className="relative   max-w-7xl mx-auto px-4 py-6">
        {/* Main content */}
        <div className="w-full">{children}</div>

        {/* Cart for desktop (right side) */}
        <div className="hidden lg:block fixed top-0 right-0 h-screen w-1/5   shadow-lg pr-64">
          <Cart />
        </div>
      </div>
    </div>
  );
}
