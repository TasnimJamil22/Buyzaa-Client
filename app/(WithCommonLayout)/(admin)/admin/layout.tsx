// import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

import Container from "@/components/UI/Container";
import Sidebar from "@/components/UI/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      {/* <h1>User Profile Layout</h1> */}

      {/* <main> {children}</main> */}
      <div className="flex gap-6">
        <div className="w-1/3  ">
          <Sidebar />
        </div>
        <div className="w-2/3">{children}</div>
      </div>
    </Container>
  );
}
