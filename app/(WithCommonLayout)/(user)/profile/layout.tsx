// import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

import Sidebar from "@/components/UI/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // <div className="flex flex-col md:flex-row">
    //   {/* Sidebar */}
    //   <div className="w-full md:w-2/5">
    //     <Sidebar />
    //   </div>

    //   {/* Main content */}
    //   <div className="w-full md:w-4/5">{children}</div>
    // </div>
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-2/5 lg:w-1/4 p-4 md:p-6">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="w-full md:w-3/5 lg:w-3/4 p-4 md:p-8  ">{children}</main>
    </div>
  );
}
