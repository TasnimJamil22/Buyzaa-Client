import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg">
      {/* <h1>Home Layout</h1> */}
      {children}
    </div>
  );
}
