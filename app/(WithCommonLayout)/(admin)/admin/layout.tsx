// import { Navbar } from "@/components/navbar";
import Navbar from "@/components/navbar";
import Container from "@/components/UI/Container";
import Sidebar from "@/components/UI/Sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      {/* <h1>User Profile Layout</h1> */}

      {/* <main> {children}</main> */}
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </Container>
  );
}
