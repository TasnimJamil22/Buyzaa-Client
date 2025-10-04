import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <h1>Home Layout</h1> */}
      {children}
    </div>
  );
}
