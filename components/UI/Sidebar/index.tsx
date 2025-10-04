"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Home, ShoppingCart, Palette, User, Menu, X } from "lucide-react";
import { Button } from "@heroui/button";

// Dummy auth state (replace with your real auth logic)
const useAuth = () => {
  const [user, setUser] = useState<{ name: string } | null>({
    name: "Tasnim",
  }); // null = not logged in
  return { user, setUser };
};

export default function Layout() {
  const { user, setUser } = useAuth();
  const [open, setOpen] = useState(false);

  // Sidebar only shows if user is logged in
  if (!user) return null;

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
        <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100">
          🎨 Art Shop
        </h1>
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 shadow-lg flex flex-col transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 hidden md:block">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            🎨 Art Shop
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <Home size={20} /> Home
          </Link>
          <Link
            href="/shop"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <ShoppingCart size={20} /> Shop
          </Link>
          <Link
            href="/gallery"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <Palette size={20} /> Gallery
          </Link>
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <User size={20} /> Profile
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            color="danger"
            className="w-full"
            onClick={() => setUser(null)}
          >
            Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="md:ml-64 pt-14 md:pt-0 w-full">
        <main className="p-6">
          <h2 className="text-2xl font-semibold">Welcome, {user.name}</h2>
          <p>This is your dashboard content.</p>
        </main>
      </div>
    </>
  );
}
