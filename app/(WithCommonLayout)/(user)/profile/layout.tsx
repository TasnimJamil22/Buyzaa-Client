import { Navbar } from "@/components/navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>User Profile Layout</h1>
      <Navbar />
      <main> {children}</main>
    </div>
  );
}
