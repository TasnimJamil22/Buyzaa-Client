// import { Navbar } from "@/components/navbar";
import Navbar from "@/components/navbar";
import Container from "@/components/UI/Container";
import Sidebar from "@/components/UI/Sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // <Container>
    //   {/* <h1>User Profile Layout</h1> */}

    //   {/* <main> {children}</main> */}
    //   <div className="flex">
    //     <div className="w-2/5">
    //       <Sidebar />
    //     </div>
    //     <div className="w-4/5">{children}</div>
    //   </div>
    // </Container>
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-2/5">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="w-full md:w-4/5">{children}</div>
    </div>
  );
}
